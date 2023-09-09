// import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Header from './components/Header'
// ROOT APP GLOBAL STATE PARENT COMPONENT

function App() {
  return (
    <>
      <AppBar />
      <div className="header__container animate__animated animate__bounce">
        <Header appTitle='Productivity App' />
      </div>
    </>
    
  );
}

export default App;
