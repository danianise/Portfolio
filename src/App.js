import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import GitContributions from './components/GitContributions';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className='mainContent'>
        <About />
        <Contact />
        {/* <GitContributions /> */}
      </div>
      
    </div>
  );
}

export default App;
