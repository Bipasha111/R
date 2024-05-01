const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: false,
    
  },
  phoneNumber: {
    type: Number,
    required: false,
     
  },
  studentAddress: {
    type: String,
    required: false,
  },


});

module.exports = mongoose.model('Student', StudentSchema);


