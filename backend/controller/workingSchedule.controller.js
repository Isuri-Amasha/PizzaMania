const workingSchedule = require("../models/workingSchedule.model");

const addSchedule = async (req, res) => {
    const { empID, date, clockIn, clockOut } =
      req.body;
  
    const schedule = new workingSchedule({
        empID,
        date,
        clockIn,
        clockOut
    });
  
    await schedule
      .save()
      .then(() => res.json('Schedule added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getSchedules = async (req, res) => {
    try {
      const schedule = await workingSchedule.find();
      res.json(schedule);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getScheduleById = async (req, res) => {
    try {
      const schedule = await workingSchedule.findById(req.params.id);
      res.json(schedule);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateSchedule = async (req, res) => {
    workingSchedule.findByIdAndUpdate(req.params.id)
      .then((existingSchedule) => {
        existingSchedule.empID = req.body.empID;
        existingSchedule.date = req.body.date;
        existingSchedule.clockIn = req.body.clockIn;
        existingSchedule.clockOut = req.body.clockOut;
        
        existingSchedule
          .save()
          .then(() => res.json('Schedule updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteSchedule = async (req, res) => {
    workingSchedule.findByIdAndDelete(req.params.id)
      .then((deletedSchedule) => {
        res.json('Schedule deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

//   const scheduleByEmployee= async (req,res) => {
//     const scheduleData = workingSchedule.find({_id:req.body.schedule_id}).populate('empID')
//     .then((deletedSchedule) => {
//     res.send(scheduleData);
//     })
//     .catch((error) => res.status(400).json("Error: " + error));
// };

const scheduleWithEmployee = async (req,res) => {
  const scheduleData = await workingSchedule.find({_id:req.body.schedule_id}).populate('empID');

  res.send(scheduleData);
};
  
  module.exports = {
    addSchedule,
    getSchedules,
    updateSchedule,
    getScheduleById,
    deleteSchedule,
    // scheduleByEmployee
    scheduleWithEmployee
   
  }