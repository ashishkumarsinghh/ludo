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
      greenTrack,
      yellowTrack,
      blueTrack,
      redTrack,
      r1Pos: 120,
    };
  }
  move(color, id, by) {
    let idx = this.state.redTrack.indexOf(this.state.r1Pos);

    this.setState((prev) => {
      return { ...prev, r1Pos: this.state.redTrack[idx + by] };
    });
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
            <Cell
              cid={id}
              celltype={boardmap.get(id)}
              pawn={this.state.r1Pos}
            />
          ))}
        <button onClick={this.move.bind(this, "red", 0, 1)}>Move</button>
      </div>
    );
  }
}
