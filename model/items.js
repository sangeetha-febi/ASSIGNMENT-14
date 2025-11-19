//const items = [
    //{id:1 , name: "mobile", quantity:5, price: 25000},
      //{id:2 , name: "watch", quantity:10, price: 10000},
       // {id:3 , name: "TV", quantity:1, price: 45000},
         // {id:4 , name: "shoes", quantity:3, price: 3500}
   
//];
//module.exports = items;





const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

const items = mongoose.model('Product', productSchema);
 module.exports = items;