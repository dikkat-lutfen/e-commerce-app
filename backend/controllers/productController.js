const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductModel");

const getProducts = async (req, res, next) => {
  try {
    let query = {};

    let priceQueryCondition = {};
    let queryCondition = false;

    if (req.query.price) {
      queryCondition = true;

      priceQueryCondition = { price: { $lte: Number(req.query.price) } };
    }

    let ratingQueryCondition = {};

    if (req.query.rating) {
      queryCondition = true;

      ratingQueryCondition = { rating: { $in: req.query.rating.split(",") } };
    }

    let categoryQueryCondition = {};

    const categoryName = req.params.categoryName || "";

    if (categoryName) {
      queryCondition = true;
      let a = categoryName.replaceAll(",", "/");
      let regEx = new RegExp("^" + a);
      categoryQueryCondition = { category: regEx };
    }

    if (req.query.category) {
      queryCondition = true;
      let a = req.query.category.split(",").map((item) => {
        if (item) return new RegExp("^" + item);
      });
      categoryQueryCondition = {
        category: { $in: a },
      };
    }

    let attrsQueryCondition = [];
    if (req.query.attrs) {
      // attrs= RAM-1TB-2TB-4TB,color-blue-red
      // ['RAM-1TB-2TB-4TB','color-blue-red','']
      attrsQueryCondition = req.query.attrs.split(",").reduce((acc, item) => {
        if (item) {
          let a = item.split("-");
          let values = [...a];
          values.shift(); // remove first item because it is key for attributes
          let a1 = {
            attrs: { $elemMatch: { key: a[0], value: { $in: values } } },
          };
          acc.push(a1);
          /*   //console.dir(acc,{ depth: null})  */
          return acc;
        } else return acc;
      }, []);
      queryCondition = true;
    }

    const pageNum = Number(req.query.pageNum) || 1;

    // sort by name, price etc.

    let sort = {};
    const sortOption = req.query.sort || "";
    if (sortOption) {
      let sortOpt = sortOption.split("_");
      sort = { [sortOpt[0]]: Number(sortOpt[1]) };
      console.log(sort);
    }

    const searchQuery = req.params.searchQuery || "";
    let searchQueryCondition = {};
    let select = {};
    if (searchQuery) {
      queryCondition = true;
      /*  searchQueryCondition = {$text : {$search: '"'+searchQuery+'"'}}  //search string mendetory to be same by help of this statement */
      searchQueryCondition = { $text: { $search: searchQuery } }; //search string mendetory to be same by help of this statement
      select = {
        score: { $meta: "textScore" },
      };
      sort = { score: { $meta: "textScore" } };
    }

    if (queryCondition) {
      query = {
        $and: [
          priceQueryCondition,
          ratingQueryCondition,
          categoryQueryCondition,
          searchQueryCondition,
          ...attrsQueryCondition,
        ],
      };
    }

    const totalProduct = await Product.countDocuments(query);

    const products = await Product.find(query)
      .select(select)
      .skip(recordsPerPage * (pageNum - 1))
      .sort(sort)
      .limit(recordsPerPage);

    res.json({
      products,
      pageNum,
      paginationLinksNumber: Math.ceil(totalProduct / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};


const getProductById = async(req,res,next)=>{
    try{
        const products = await Product.findById(req.params.id).populate("reviews")
        .orFail()
        res.json(products)
    }catch(error){
        next(error)
    }
}

const getBestsellers = async (req,res,next)=>{
    try{
        const products = await Product.aggregate([
            {$sort:{category:1, sales:-1}},
            {$group:{_id:"$category",doc_with_max_sales: {$first:"$$ROOT"}}},
            {$replaceWith:"$doc_with_max_sales"},
            {$match:{sales:{$gt :0}}},
            {$project:{_id:1, name:1, images:1, category:1,description:1}},
            {$limit:3}
        ])
        res.json(products)
    }catch(error){
        next(error)
    }
}

module.exports = {getProducts, getProductById, getBestsellers};
