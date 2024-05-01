const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get single student by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Create a student
router.post('/join', async (req, res) => {
  const { name, email,age,phoneNumber,studentAddress } = req.body;
  
  try {
    const newStudent = new Student({
      name,
      email,
      age,
      phoneNumber,
      studentAddress
    });

    const student = await newStudent.save();
    console.log(email)
    res.json(student);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update a student
router.put('/:id', async (req, res) => {
  // Implement update logic here
});

// Delete a student
router.delete('/:id', async (req, res) => {
  // Implement delete logic here
});

module.exports = router;
