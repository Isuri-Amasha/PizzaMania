const Employee = require("../models/employee.model");
const counter = require("../models/Counter.model");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

//register employee 
const addEmployee = async (req, res) => {
  const { id, fullName, contactNo, email, address, position, password } = req.body;

  const employee = new Employee({
    id,
    fullName,
    contactNo,
    email,
    address,
    position,
    password
  });

  await employee
    .save()
    .then(() => res.json('Employee added!'))
    .catch((error) => res.status(400).json("Error: " + error));
};

const getEmployees = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.json(employee);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const updateEmployee = async (req, res) => {
  Employee.findByIdAndUpdate(req.params.id)
    .then((existingEmployee) => {
      existingEmployee.empID = req.body.empID;
      existingEmployee.fullName = req.body.fullName;
      existingEmployee.contactNo = req.body.contactNo;
      existingEmployee.email = req.body.email;
      existingEmployee.address = req.body.address;
      existingEmployee.position = req.body.position;


      existingEmployee
        .save()
        .then(() => res.json('Employee updated!'))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteEmployee = async (req, res) => {
  Employee.findByIdAndDelete(req.params.id)
    .then((deletedEmployee) => {
      res.json('Employee deleted');
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  addEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,

}