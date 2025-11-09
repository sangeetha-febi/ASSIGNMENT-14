const express =require("express");
const router = express.Router();

const {getallItems, getItemsbyId , createItem, updateProduct, deleteProduct} = require("../controller/itemscontroller");


const authMiddleware = require("../middleware/authMiddleware");


 

router.get("/",getallItems);
router.get("/:id",authMiddleware([]),getItemsbyId);
router.post("/",authMiddleware(["admin"]),createItem);
router.put("/:id",updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
