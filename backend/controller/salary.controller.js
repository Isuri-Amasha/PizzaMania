const Salary = require("../models/salary.model");

const addSalary = async (req, res) => {
  const { empId, empName, basicSalary, otRate } =
    req.body;

  const newsalary = new Salary({
    empId,
    empName,
    basicSalary,
    otRate
  });

  await newsalary
    .save()
    .then(() => res.json('Salary added!'))
    .catch((error) => res.status(400).json("Error: " + error));
};

const getSalary = async (req, res) => {
  try {
    const salary = await Salary.find();
    res.json(salary);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const getSalaryById = async (req, res) => {
  try {
    const salary = await Salary.findById(req.params.id);
    res.json(salary);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const updateSalary = async (req, res) => {
  Salary.findByIdAndUpdate(req.params.id)
    .then((existingSalary) => {
      existingSalary.empID = req.body.empID;
      existingSalary.empName = req.body.empName;
      existingSalary.basicSalary = req.body.basicSalary;
      existingSalary.otRate = req.body.otRate;


      existingSalary
        .save()
        .then(() => res.json('Salary updated!'))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteSalary = async (req, res) => {
  Salary.findByIdAndDelete(req.params.id)
    .then((deletedSalary) => {
      res.json('Salary deleted');
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

//   const calculateSalary = async (req, res) => {
//     Salary.findById(req.params.id)
//       .then((deletedSalary) => {
//         const OT = deletedSalary.otRate;
//         const calculatedSalary = OT * 10
//         res.json(calculatedSalary);
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

//   const getAndCalcSalary = function(options) {

//     var calculationData = req.body;

//     for( var i = calculationData.salary.length -1 ; i >= 0; i--){

//         var sal = calculationData.salary[i];

//         var calculationTotal = {};

//         calculationTotal.empID = sal.empId;
//         calculationTotal.OT = sal.otRate;


//         for(var j = overate.otTime -1)
//     }
//   }

module.exports = {
  addSalary,
  getSalary,
  getSalaryById,
  updateSalary,
  deleteSalary,
  // calculateSalary,
  // getAndCalcSalary


}