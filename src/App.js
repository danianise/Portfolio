import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactExpanded from './components/ContactExpanded'
import GitContributions from './components/GitContributions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Contact />

      <div className='mainContent'>
        <Title />
        <About />
        <Projects />
        <Skills />
        <ContactExpanded />
      </div>
      
    </div>
  );
}

export default App;
