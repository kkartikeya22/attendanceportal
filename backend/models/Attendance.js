const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);
