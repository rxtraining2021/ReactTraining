import logo from './logo.svg';
import './App.css';
import StudentIDCard from './StudentidCard';

//Steps assignment 2
//1)  Make StudentIDCard(studentidCard.js) Component which include another component StudentImageC
//2)  Make Personal and college info Component.
//3)  call in Main function App.

function App() {
  return (
    <div className="App">
      <h1>Student Profile</h1>
      <StudentIDCard></StudentIDCard>
    </div>
  );
}

export default App;
