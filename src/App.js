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
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Evgeniya Ryazantseva</footer>
      </div>
    </div>
  );
}
