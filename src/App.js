// import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Header from './components/Header';
import Tasks from './components/Tasks';
import BottomNavigation from './components/BottomNavigation';
import {useState} from 'react';
// ROOT APP GLOBAL STATE PARENT COMPONENT

function App() {
  // private
  const [taskList, setTasks] = useState([
    {
      id: 1,
      text: 'Study react',
      day: 'September 9, 2023',
      reminder: false
    },
    {
      id: 2,
      text: 'Study react',
      day: 'September 9, 2023',
      reminder: true
    },
    {
      id: 3,
      text: 'Study react',
      day: 'September 9, 2023',
      reminder: true
    }
  ]);
  // public
  return (
    <>
      <AppBar />
      <header id="header">
        <div className="header__container animate__animated animate__bounce">
          <Header appTitle='Productivity App' />
          <Tasks />
        </div>
      </header>
      
      <div className="bottomNav">
      <BottomNavigation />
      </div>
      
    </>
    
  );
}

export default App;
