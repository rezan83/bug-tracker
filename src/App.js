import Card from './components/Card/Card';
import Issues from './components/Issues/Issues';
//the Issues is going to load when we click on a btn , I made it here just to see the style
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Bug Tracker</h1>
      </header>
      <Card />
      <Issues/>
    </div>
  );
}

export default App;
