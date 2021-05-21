import logo from './logo.svg';
import './App.css';
import StudentList from './StudentList';

//1) first call Studentlist, take arraylist store in state object
//2) call StudentCard and get data in "this.state" using props.
//3) use map keyword and display data in UI side.

function App() {

  return (
    <div className="App">
      <StudentList></StudentList>
    </div>
  );
}

export default App;
