import logo from './logo.svg';
import './App.css';
import StudentIDCard from './Components/StudentIDCard'

function App() {
  return (
    <div className="App">
      Hello World
      <StudentIDCard >
        <p>Student Details</p>
        <p>College Details</p>
      </StudentIDCard>
    </div>
  );
}

export default App;
