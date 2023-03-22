const router = require('express').Router();
const { response } = require('express');
let workingSchedule = require("../models/workingSchedule.model");
const workingController = require("./schedule.controller");

const {
    addSchedule,
    getSchedules,
    updateSchedule,
    getScheduleById,
    deleteSchedule,
    scheduleWithEmployee
   
  } = require("../controller/workingSchedule.controller");

  router.post("/", addSchedule);

  router.get("/", getSchedules);

  router.put("/:id", updateSchedule);

  router.get("/:id", getScheduleById);

  router.delete("/:id", deleteSchedule);

  router.post('/getByEmployeeId', scheduleWithEmployee)

  module.exports = router;