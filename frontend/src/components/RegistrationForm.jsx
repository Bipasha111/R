import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age:'',
    phoneNumber:'',
    studentAddress:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:5000/api/students/join', formData);

      // const response = await axios('/api/students',{
      //   method:"post",
      //   // baseURL:"http://localhost:5000/api",
      //   baseURL:"http://localhost:3000/api",
      //   url:"requistions"
      // });

      console.log(response.data); // Optional: handle success response
      // Optionally, you can redirect to the student list page after successful submission
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
   <center style={{margin:"50px"}}>
    
    <form  onSubmit={handleSubmit} >
          <h1>User form</h1>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"  required/><br></br>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /><br></br>
      <input type="number" name="age"  value={formData.age} onChange={handleChange} placeholder="age" required/><br></br>
      <input type="number" name="phoneNumber"  value={formData.phoneNumber} onChange={handleChange} placeholder="PhoneNumber" required/><br></br>
      <input type="text" name="studentAddress"  value={formData.studentAddress} onChange={handleChange} placeholder="StudentAddress" required/><br></br>
      
      <button type="submit">Submit</button>
    </form>
  
   </center>
    
  );
};
export default RegistrationForm;

// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     // Add more fields as needed
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/api/students', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
   
//       const data = await response.json();
//       console.log(data); // Optional: handle success response
//       // Optionally, you can redirect to the student list page after successful submission
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
//       <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
//       {/* Add more form fields here */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default RegistrationForm;
