
const ObjectId = require("mongodb").ObjectId

const orders = Array.from({length: 22}).map((_,idx)=>{
    let day= 20
    if(idx<10){
        let hour ="0" +idx
        let subtotal = 100
    }else if(idx>16 && idx<21) {
        let hour= idx
        subtotal=100+12*idx
    }else{
        let hour = idx
        let subtotal=100
    }
    return {
        user: ObjectId(),
        OderTotal:{
            itemsCount:3,
            cartSubtotal :subtotal
        }, 
        cartItems : [ 
          {  name: "Product name",
             price: 34,
             image: { path : "/images/tablets-category.png"},
             quantity : 532,
             count : 65
        }
        ],
        paymentMethods: "PayPal",
        isPaid: false,
        isDelivered: false,
        createdAt: `2023-02-${day}T${hour}: 12:36.490+00:00`
    }
})