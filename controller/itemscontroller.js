const itemModel = require("../model/items");

 //Get All API

 const getallItems = async (req, res)=> {
    try{
      const products = await itemModel.find();
      if(products.length === 0)
        {
        return res.status (200).json({message:"Product Collection Empty"});
      }
      res.status(200).json({count:products.length, data:products}); 
    }catch(err){
      res.status(500).json({message:"server Error"});
    }
};
 
 //Get by Id
 const getItemsbyId = (req,res) =>{
   const id = parseInt(req.params.id);
    const item = itemModel.find(existingItem=>existingItem.id===id);
    if(item){
      res.status(200).json(item);
    }
    else{
      res.status(404).json({message:"item not found"});
    }
 };

 //post API
 const createItem =(req,res)=>
 {
   const{name,quantity,price} = req.body;
   if(!name ||!quantity || !price )
   {
      res.status(404).json({message: "Both fields are required"});
   }
   const newItems = {
      id: itemModel.length? itemModel[itemModel.length-1].id+1:1,
      name,
      quantity,
      price
   }
   itemModel.push(newItems);
   res.status(201).json(newItems);
};
// Update API
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const {name, quantity, price} = req.body;

    const product = itemModel.find(existingProduct => existingProduct.id === id);

    if(product){
        
        product.name = name ?? product.name; // || - ??
        product.quantity = quantity ?? product.quantity;
        product.price = price ?? product.price;
        res.status(200).json(product);
    }else{
        res.status(404).json({message: "Product Not Found"});
    }
};
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const product = itemModel.findIndex(existingProduct => existingProduct.id === id);

    if(product !== -1){
        const deletedProduct = itemModel.splice(product, 1);
        res.status(200).json({message: "Product deleted"},);
    } else {
         res.status(404).json({message: "Product Not Found"});
    }
};

   
 module.exports = {getallItems, getItemsbyId, createItem, updateProduct, deleteProduct};