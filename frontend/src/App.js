
import { BrowserRouter, Link, Route ,Routes } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import StudentDetails from './components/StudentDetails';
import StudentList from './components/StudentList';

function App() {
  return (
   <>
   <BrowserRouter>

   <div><Link to={"/allstudent"}> AllStudent</Link> </div>
        <Routes>
        <Route path="/" element={ <RegistrationForm/>}/>
        <Route path="/studentdetails/:studentId" element={<StudentDetails/>}/>
        <Route path="/allstudent" element={<StudentList/>}/>
        </Routes>

       
    </BrowserRouter>
   
   </>
  );
}

export default App;
