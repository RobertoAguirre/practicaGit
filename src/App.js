import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://www.google.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This account has been hacked...
        </a>
      </header>
    </div>
  );
}

export default App;
