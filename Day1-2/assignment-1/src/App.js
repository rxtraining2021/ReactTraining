import logo from './logo.svg';
import './App.css';
import StudentIDCard from './Components/StudentIDCard'

function App() {
  return (
    <div className="App">
      Hello World
      <StudentIDCard >
        <h1>Student Details</h1>
      </StudentIDCard>
    </div>
  );
}

export default App;
