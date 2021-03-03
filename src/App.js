import logo from './images/guacamole-logo.png';
import './App.css';
import NavBar from './components/NavBar'


function App() {
  return (
    <>
      <NavBar />
      <div id="main">
        <img id="logo" src={logo} alt="logo"/>
      </div>
    </>
  );
}

export default App;
