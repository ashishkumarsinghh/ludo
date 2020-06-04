import React, { Component } from "react";
import Cell from "./components/Cell";
import boardmap from "./boardmap";
import { greenTrack, yellowTrack, blueTrack, redTrack } from "./playerTrack";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      tracks: { greenTrack, yellowTrack, blueTrack, redTrack },
    };
  }
  componentDidMount() {
    const ids = [];
    for (let i = 0; i < 289; i++) {
      ids.push(i);
    }
    this.setState((prev) => {
      return { ...prev, ids: ids };
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.ids.length > 0 &&
          this.state.ids.map((id) => (
            <Cell cid={id} celltype={boardmap.get(id)} />
          ))}
      </div>
    );
  }
}
