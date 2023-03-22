const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const menueSchema = new Schema({
    itemCategory : {type : String,required : true},
    itemName : {type : String,required : true},
    size: {type :String, required : true},
    price : {type : String, required : true},
    onSale : {type : String, required : true},
   
    // workingSchedule : {type: mongoose.Schema.Types.ObjectId, ref:'workingSchedule'}
    
     
},{
        timestamps : true,
    
});


const Menue = mongoose.model("Menue", menueSchema);

module.exports = Menue;