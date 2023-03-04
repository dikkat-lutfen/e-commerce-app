import ProductListPageComponent from "./components/ProductListPageComponent";
import axios from "axios";


const getProducts = async (categoryName = "",  searchQuery = "") => {
   
    const search = searchQuery ? `search/${searchQuery}/` : "";
    const category = categoryName ? `category/${categoryName}/` : "";
    const url = `/api/products/${category}${search}?`;
    const { data } = await axios.get(url);
        return data

}

const ProductListPage = () => {

  return <ProductListPageComponent getProducts={getProducts}   />;
};

export default ProductListPage;

