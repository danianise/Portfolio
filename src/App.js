import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className='mainContent'>
        <Main />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
