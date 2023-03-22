const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({
    productID : {type : String, unique : true,required : true},
    productName: {type :String, required : true},
    productCategory : {type : String, required : true},
    quantity : {type : String, required : true},
    
    // workingSchedule : {type: mongoose.Schema.Types.ObjectId, ref:'workingSchedule'}
    
     
},{
        timestamps : true,
    
});


const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;