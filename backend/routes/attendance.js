const express = require('express');
const router = express.Router();

const Attendance = require('../models/Attendance');

// Get all attendance records
router.get('/', async (req, res) => {
    try {
        const attendance = await Attendance.find();
        res.json(attendance);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

  

// Create a new attendance record
router.post('/', async (req, res) => {
    const attendance = new Attendance({
        name: req.body.name,
        status: req.body.status
    });

    try {
        const newAttendance = await attendance.save();
        res.status(201).json(newAttendance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
