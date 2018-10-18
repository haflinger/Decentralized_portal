import React, { Component } from "react";
import "./App.css";
import Card from "./Card";
import decentralizedWebs from "./decentralizedWebs";

class App extends Component {
  render() {
    const dwebs = decentralizedWebs || [];
    const cards = dwebs.map((dweb, i) => <Card key={i} dweb={dweb} />);

    return (
      <div className="App">
        <div className="App-header">
          <p className="App-title">Decentralized portal</p>
          <hr />
          <p className="App-subtitle">
            Permanent censorship resistant websites <br /> powered by IPFS,
            Ethereum and DAppNode
          </p>
        </div>

        <div className="container mt-4">
          <div className="row">{cards}</div>
        </div>
      </div>
    );
  }
}

export default App;
