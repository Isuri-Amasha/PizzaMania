const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const workingScheduleSchema = new Schema({
    empID : {type : mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    // empID : {type : String, required : true},
    date: {type :String, required : true},
    clockIn : {type : String, required : true},
    clockOut : {type : String, required : true},
   
    
     
},{
        timestamps : true,
    
});


const workingSchedule = mongoose.model("workingSchedule", workingScheduleSchema);

module.exports = workingSchedule;