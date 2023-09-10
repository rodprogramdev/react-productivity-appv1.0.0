// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AppBar from './components/AppBar';
import Header from './components/Header';
import Tasks from './components/Tasks';
import ShowHideSection from './components/ShowHideSection';
import AppVersion from './components/AppVersion';
import BottomNavigation from './components/BottomNavigation';
import {useState} from 'react';
// ROOT APP GLOBAL STATE PARENT COMPONENT

function App() {
  // private
  const [taskList, setTasks] = useState([
    {
      idRef: 1,
      taskText: 'Study react',
      day: 'September 10, 2023',
      reminder: false
    },
    {
      idRef: 2,
      taskText: 'Study material ui',
      day: 'September 11, 2023',
      reminder: true
    },
    {
      idRef: 3,
      taskText: 'Build a project with react',
      day: 'September 12, 2023',
      reminder: true
    }
  ]);

  // ADD TASK

  // DELETE
  const deleteTask = () => {

  }

  // TOGGLE / SHOW OR HIDE FORMS

   
  // public
  return (
    <>
      <AppBar />

      <header id="header">
        <Router>
          <div className="header__container animate__animated animate__bounce">
          <Header appTitle='Productivity App' />
          <Tasks taskList={taskList} />
          <Routes>
            <Route path='/version' element={<AppVersion />}/>
          </Routes>
          <ShowHideSection />
          </div>
         
        </Router>
      </header>
      
      <div className="bottomNav">
      <BottomNavigation />
      </div>
      
    </>
    
  );
}

export default App;
