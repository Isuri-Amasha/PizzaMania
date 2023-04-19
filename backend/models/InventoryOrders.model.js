const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const inventoryOrdersSchema = new Schema({
    productID : {type : String,required : true},
    productName: {type :String, required : true},
    productCategory : {type : String, required : true},
    availableQuantity : {type : String, required : true},
    requestedQuantity : {type : String, required : true},
    status:{type : String, required : true}
    
     
},{
        timestamps : true,
    
});


const InventoryOrders = mongoose.model("InventoryOrders", inventoryOrdersSchema);

module.exports = InventoryOrders;