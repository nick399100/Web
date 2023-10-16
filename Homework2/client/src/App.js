import { useState } from 'react';
import './App.css';
import Axios from 'axios'
function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('')
  const [studentList, setStudentList] = useState([]);

  const addStudent = () => {
    Axios.post('http://localhost:3001/create', {
      name: name,
      age: age,
      gender: gender,
    }).then(() => { console.log("sussccess"); })


  };
  const getStudents = () => {
    Axios.get('http://localhost:3001/students', {

    }).then((response) => {
      setStudentList(response.data);
    })
  };
  return (
    <div className="App">

      <div className='information'>
        <label>Name:</label>
        <input type="text" onChange={(event) => {
          setName(event.target.value);
        }} />
        <label>Age:</label>
        <input type="number" onChange={(event) => {
          setAge(event.target.value);
        }} />
        <label>Gender:</label>
        <input type="text"
          onChange={(event) => {
            setGender(event.target.value);
          }} />
        <button onClick={addStudent}>Add Student</button><br></br>
        
        <div className='Students'>
          <button onClick={getStudents}>Show Students</button>


          {studentList.map((val,key)=>{
            return<div className='student'> 
            <h3>Name: {val.name}</h3>
            <h3>Age: {val.age}</h3>
            <h3>Gender: {val.gender}</h3></div>

          })}


        </div>


      </div>

    </div>
  );
}

export default App;
