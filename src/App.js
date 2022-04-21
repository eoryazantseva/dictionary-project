import "./App.css";
import logo from "./logo.jpg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt=""></img>
        </header>
        <main>
          <Dictionary defaultKeyword="flower" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>
            This project was coded by Evgeniya Ryazantseva and is{" "}
            <a
              href="https://github.com/eoryazantseva/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and hosted on{" "}
            <a href="https://relaxed-fenglisu-38c932.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
