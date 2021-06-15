import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
