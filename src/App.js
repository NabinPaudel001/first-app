import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Greet name="Nabin" lname="Paudel">
            <p>This is children props</p>
          </Greet>
          <Greet name="Ram" lname="Hari"/>
          <Greet name="Krishna" lname="Kale"/>
          <Welcome/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Nabin
        </a>
      </header>
    </div>
  );
}

export default App;
