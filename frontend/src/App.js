import logo from './logo.svg';
import './App.css';

function App() {
  const data = fetch('http://localhost:8080/').then((res) => res.json()).then((data) => console.log(data))
  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
}

export default App;
