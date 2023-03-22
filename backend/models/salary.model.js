const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({
    empId: { type: String, required: true },
    empName: { type: String, required: true },
    basicSalary: { type: Number, required: true },
    otRate: { type: Number, required: true },
});

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;