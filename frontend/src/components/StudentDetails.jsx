import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom"

const StudentDetails = ({ match }) => {
  const [student, setStudent] = useState(null);
 const {studentId} = useParams()
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/students/${studentId}`);
        setStudent(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStudent();
  }, [studentId]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      
  
    </div>
  );
};

export default StudentDetails;
