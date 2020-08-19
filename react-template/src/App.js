import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>
        <Card src="ex.jpg" title="Live In the moment"></Card>
        <Card></Card>
        <Card></Card>
      </section>
      <footer>
        <span>Hex Zero</span>
      </footer>
    </div>
  );
}

export default App;
