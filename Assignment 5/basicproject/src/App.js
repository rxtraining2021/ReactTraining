import logo from './logo.svg';
import './App.css';
import StudentId from './StudentId';
import student from './Student';

function App() {
  return (
    <div>
      <h1>Favourite Characters of Naruto Anime Series</h1>
      <hr></hr>
      <StudentId students = {student} />
    </div>
  );
}

export default App;
