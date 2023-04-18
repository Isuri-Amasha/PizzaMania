const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const workingScheduleSchema = new Schema({
    // empID : {type : mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    empID : {type : String},
    // empID : {type : String, required : true},
    date: {type :String, required : true},
    clockIn : {type : String},
    clockOut : {type : String},
    sTime : {type : String},
    eTime : {type : String},
    status: {type : String}
   
    
     
},{
        timestamps : true,
    
});


const workingSchedule = mongoose.model("workingSchedule", workingScheduleSchema);

module.exports = workingSchedule;