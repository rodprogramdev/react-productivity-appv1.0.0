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
      motivation: '“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney',
      reminder: false
    },
    {
      idRef: 2,
      taskText: 'Study material ui',
      day: 'September 11, 2023',
      motivation: '“If people are doubting how far you can go, go so far that you can’t hear them anymore.” —Michele Ruiz',
      reminder: true
    },
    {
      idRef: 3,
      taskText: 'Build a project with react',
      day: 'September 12, 2023',
      motivation: '“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” —Unknown',
      reminder: true
    },
    {
      idRef: 4,
      taskText: 'Build a project with react',
      day: 'September 12, 2023',
      motivation: 'https://zenquotes.io/api/quotes',
      reminder: true
    }
  ]);

  // ADD TASK

  // DELETE
  const deleteTask = (idRef) => {
    // alert('test deleteTask method', idRef);
    // console.log('This is a test to delete a task code block ' + idRef);
    setTasks(
      taskList.filter((task) => task.idRef !== idRef)
    )
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
          <Tasks taskList={taskList} onDeleteTask={deleteTask} />
          <Routes>
            <Route path='/version' element={<AppVersion />}/>
          </Routes>
          <ShowHideSection />
          </div>
         
        </Router>
        <div className="bottomNav">
      <BottomNavigation />
      
      
      </div>
      </header>
      
      
      
    </>
    
  );
}

export default App;
