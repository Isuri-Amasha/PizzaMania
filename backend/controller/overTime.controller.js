const overTime = require("../models/overTime.model");

const addOT = async (req, res) => {
    const { empID, date, sTime,eTime } =
      req.body;
  
    const schedule = new overTime({
        empID,
        date,
        sTime,
        eTime
    });
  
    await schedule
      .save()
      .then(() => res.json('Over Time added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getOT = async (req, res) => {
    try {
      const schedule = await overTime.find();
      res.json(schedule);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getOTById = async (req, res) => {
    try {
      const schedule = await overTime.findById(req.params.id);
      res.json(schedule);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateOT = async (req, res) => {
    overTime.findByIdAndUpdate(req.params.id)
      .then((existingSchedule) => {
        existingSchedule.empID = req.body.empID;
        existingSchedule.date = req.body.date;
        existingSchedule.sTime = req.body.sTime;
        existingSchedule.eTime = req.body.eTime;
      
        
        existingSchedule
          .save()
          .then(() => res.json('Over Time updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteOT = async (req, res) => {
    overTime.findByIdAndDelete(req.params.id)
      .then((deletedSchedule) => {
        res.json('Schedule deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

//   const updateScheduleStatusAndClockIn = async (req, res) => {
//     workingSchedule.findByIdAndUpdate(req.params.id)
//       .then((existingSchedule) => {
       
//         existingSchedule.clockIn = req.body.clockIn;
//         existingSchedule.status = req.body.status;
        
//         existingSchedule
//           .save()
//           .then(() => res.json('Schedule Status updated!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

//   const updateScheduleStatusAndClockOut = async (req, res) => {
//     workingSchedule.findByIdAndUpdate(req.params.id)
//       .then((existingSchedule) => {
       
//         existingSchedule.clockOut = req.body.clockOut;
//         existingSchedule.status = req.body.status;
        
//         existingSchedule
//           .save()
//           .then(() => res.json('Schedule Status updated!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

//   const updateStatus = async (req, res) => {
//     workingSchedule.findByIdAndUpdate(req.params.id)
//       .then((existingSchedule) => {
       
        
//         existingSchedule.status = req.body.status;
        
//         existingSchedule
//           .save()
//           .then(() => res.json('Schedule Status updated!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };

//   const updateExistingSchedule = async (req, res) => {
//     workingSchedule.findByIdAndUpdate(req.params.id)
//       .then((existingSchedule) => {
//         // existingSchedule.empID = req.body.empID;
//         existingSchedule.date = req.body.date;
//         existingSchedule.sTime = req.body.sTime;
//         existingSchedule.eTime = req.body.eTime;
//         // existingSchedule.clockIn = req.body.clockIn;
//         // existingSchedule.clockOut = req.body.clockOut;
//         existingSchedule.status = req.body.status;
        
//         existingSchedule
//           .save()
//           .then(() => res.json('Schedule updated!'))
//           .catch((error) => res.status(400).json("Error: " + error));
//       })
//       .catch((error) => res.status(400).json("Error: " + error));
//   };
  

//   const scheduleByEmployee= async (req,res) => {
//     const scheduleData = workingSchedule.find({_id:req.body.schedule_id}).populate('empID')
//     .then((deletedSchedule) => {
//     res.send(scheduleData);
//     })
//     .catch((error) => res.status(400).json("Error: " + error));
// };

// const scheduleWithEmployee = async (req,res) => {
//   const scheduleData = await workingSchedule.find({_id:req.body.schedule_id}).populate('empID');

//   res.send(scheduleData);
// };
  
  module.exports = {
    addOT,
    getOT,
    updateOT,
    getOTById,
    deleteOT,
    // updateScheduleStatusAndClockIn,
    // updateScheduleStatusAndClockOut,
    // updateStatus,
    // updateExistingSchedule,
    // // scheduleByEmployee
    // scheduleWithEmployee
   
  }