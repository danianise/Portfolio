import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from './components/NavBar';
import Title from './components/Title';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactExpanded from './components/ContactExpanded'
import ReactGA from 'react-ga';

import {AnimatePresence} from 'framer-motion'

function App() {

  const location = useLocation()
  const trackingID = "G-F1QNDT07NH"
  ReactGA.initialize(trackingID)

  return (
    <div className="App">
      <NavBar />
      <Contact />

      <div className='mainContent'>
        {/* <Title />
        <About />
        <Projects />
        <Skills />
        <ContactExpanded /> */}

        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Title />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<ContactExpanded />} />
          </Routes>
        </AnimatePresence>
        
      </div>
      
    </div>
  );
}

export default App;
