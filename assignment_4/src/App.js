import logo from './logo.svg';
import './App.css';
import StudentidCard from './StudentidCard';
import Student from './Student';

//Steps assignment 4 & 5
//1) Call StudentIDCard component 3 times and pass different student data using props.
//2) pros use in StudentIdCard component.
//3) Create Student Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent.

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td>
            <h1>Student Profile</h1>
            <StudentidCard details={Student[0]}></StudentidCard>
          </td>
          <td></td><td></td>
          <td>
            <h1>Student Profile</h1>
            <StudentidCard details={Student[1]}></StudentidCard>
          </td>
          <td></td><td></td>
          <td>
            <h1>Student Profile</h1>
            <StudentidCard details={Student[2]}></StudentidCard>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
