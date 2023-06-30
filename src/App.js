import "./App.css";

function App() {
  return (
    <>
      <div className="portfolio">
        <h1 className="title">Welcome to my portfolio!</h1>
      </div>
      <div className="App">
        <header className="App-header">
          <div class="card">
            <div class="card-body">
              <p>Website for archery lessons and events</p>
              <li>Built with React</li>
              <li>Incorporated booking page</li>
              <a
                class="App-link"
                href="https://www.eastbayarchery.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                East Bay Archery
              </a>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <p>An online market for listing vehicles for sale </p>
              <li>Built with React</li>
              <li>Uses Express.js, Cloudinary & MongoDB</li>
              <a
                className="App-link"
                href="https://trucklist.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Truck Finder
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
