
import './App.css'
import NavBar from './Components/NavBar' ;
import Home from './Components/MainContent';


import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Registration from './Components/Registration';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Languages from './Components/Languages';
import ProjectDetails from './Components/projectDetails';

function App() {

  return (
    <>
    <Router>
    <NavBar></NavBar>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/register" element={<Registration></Registration>}></Route>
      <Route path="/skills" element={<Skills></Skills>}></Route>
      <Route path='/education' element={<Education></Education>}></Route>
      <Route path="/experience" element={<Experience></Experience>}></Route>
      <Route path="/languages" element={<Languages></Languages>}></Route>
      <Route path="/projectdetails" element={<ProjectDetails></ProjectDetails>}></Route>
    </Routes>
    </Router>
    </>
  )
}

export default App
