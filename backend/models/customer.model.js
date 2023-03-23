const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    
    // _id : {type : String,unique : true, required : true},
    fullName: {type :String, required : true},
    email : {type : String, required : true},
    contactNo : {type : String,unique : true, required : true},
    address : {type : String, required : true},
    
    // workingSchedule : {type: mongoose.Schema.Types.ObjectId, ref:'workingSchedule'}

},{
        timestamps : true,
    
});


const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;