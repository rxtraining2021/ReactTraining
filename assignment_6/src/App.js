import logo from './logo.svg';
import './App.css';
import StudentidCard from './StudentidCard';
import Student from './Student';

//Steps assignment 6
//1) While calling StudentID Component in the app Component pass one <h3>Student Details</h3> as children.
//2) Access it in the StudentID Card Component with Children props.

var ChildC = () => {
  return (
    <h3>
      Student Details
    </h3>
  )
}

function App() {
  return (
    <div className="App">
    <table>
      <tr>
        <td>
          <StudentidCard details={Student[0]}><ChildC></ChildC></StudentidCard>
        </td>
        <td></td><td></td>
        <td>
          <StudentidCard details={Student[1]}><ChildC></ChildC></StudentidCard>
        </td>
        <td></td><td></td>
        <td>
          <StudentidCard details={Student[2]}><ChildC></ChildC></StudentidCard>
        </td>
      </tr>
    </table>
    </div>
  );
}

export default App;
