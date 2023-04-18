const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const overTimeSchema = new Schema({
    // empID : {type : mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    empID : {type : String},
    // empID : {type : String, required : true},
    date: {type :String, required : true},
    sTime : {type : String},
    eTime : {type : String},
   
   
    
     
},{
        timestamps : true,
    
});


const overTime = mongoose.model("OverTime", overTimeSchema);

module.exports = overTime;