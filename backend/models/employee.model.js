const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    id: { type: Number,required: true },
    fullName: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    position: { type: String, required: true }, // position means admin employee eh??
    password: { type: String, required: true },
    // workingSchedule : {type: mongoose.Schema.Types.ObjectId, ref:'workingSchedule'}

}, {
    timestamps: true,

});


const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;