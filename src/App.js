import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Contact from './components/Contact';
import GitContributions from './components/GitContributions';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className='mainContent'>
        <Main />
        <Contact />
        <GitContributions />
      </div>
      
    </div>
  );
}

export default App;
