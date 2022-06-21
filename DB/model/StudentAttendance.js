const mongoose = require('mongoose');

const StudentAttendance = new mongoose.Schema({
  subject: {type:String},
  date: {type: String},
  id: {type: String},
});

const StAttendance = mongoose.model('Student Attendance', StudentAttendance);
module.exports = StAttendance;
