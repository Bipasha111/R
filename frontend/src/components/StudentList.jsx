import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <>
          <li  key={student._id}><Link to={`/studentdetails/${student._id}`}>{student.name} </Link></li>
          </>
          
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
