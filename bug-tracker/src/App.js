
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Issues/Issues';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Bug Tracker</h1>
      </header>
      <Card />
      <Cards/>
    </div>
  );
}

export default App;
