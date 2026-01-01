
import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Routes,Route} from 'react-router-dom'
import {Home} from "./pages/Home.jsx";
import {Workpage} from "./pages/Workpage.jsx";
import SkillsPage from "./pages/Skillspage.jsx";
import {ContactSection} from "./pages/ContactSection.jsx";

function App() {


  return (
      <>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/work' element={<Workpage/>}/>
              <Route path='/skills' element={<SkillsPage/>}/>
              <Route path='/contact' element={<ContactSection/>}/>
          </Routes>
    </>
  )
}

export default App
