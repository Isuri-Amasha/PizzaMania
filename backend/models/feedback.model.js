const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    feedback: {type :String, required : true},
    // userContact : {type : mongoose.Schema.Types.ObjectId, ref: 'Customer'},
    userContact : {type : String,required : true},
    empID : {type : String,required : true}
    // empID : {type : mongoose.Schema.Types.ObjectId, ref: 'Employee'},
    
    // workingSchedule : {type: mongoose.Schema.Types.ObjectId, ref:'workingSchedule'}
    
     
},{
        timestamps : true,
    
});


const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;