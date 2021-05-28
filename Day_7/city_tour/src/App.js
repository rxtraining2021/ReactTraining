import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

function App() {
  return (
    <div>
      <Navbar />
      <TourList></TourList>
    </div>
  );
}

export default App;
