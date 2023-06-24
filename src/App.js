import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="portfolio">
        <h1 className="title">Welcome to my portfolio!</h1>
      </div>
      <div className="App">
        <header className="App-header">
          <p>Website for archery lessons and events</p>
          <a
            className="App-link"
            href="https://www.eastbayarchery.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ul>
              <li>East Bay Archery</li>
            </ul>
          </a>
          <p>An online market for listing vehicles for sale </p>
          <a
            className="App-link"
            href="https://www.eastbayarchery.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ul>
              <li>Truck Finder </li>
            </ul>
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
