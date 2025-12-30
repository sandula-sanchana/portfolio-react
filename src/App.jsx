
import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Routes,Route} from 'react-router-dom'
import {Home} from "./pages/Home.jsx";
import {Workpage} from "./pages/Workpage.jsx";

function App() {


  return (
      <>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/work' element={<Workpage/>}/>
          </Routes>
    </>
  )
}

export default App
