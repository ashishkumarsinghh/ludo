import React, { Component } from "react";
import Cell from "./components/Cell";
import boardmap from "./boardmap";
import { greenTrack, yellowTrack, blueTrack, redTrack } from "./playerTrack";
import "./App.css";
import Dice from "./components/Dice";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      turn: 0,
      greenTrack,
      yellowTrack,
      blueTrack,
      redTrack,
      pawnState: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      positions: [
        35,
        38,
        69,
        72,
        29,
        32,
        80,
        83,
        216,
        219,
        267,
        270,
        205,
        208,
        239,
        242,
      ],
    };
  }

  move(id, by) {
    console.log("dice roll is : " + by);
    let track;
    if (id >= 0 && id <= 3) {
      track = this.state.redTrack;
    } else if (id >= 4 && id <= 7) {
      track = this.state.greenTrack;
    } else if (id >= 8 && id <= 11) {
      track = this.state.yellowTrack;
    } else if (id >= 12 && id <= 15) {
      track = this.state.blueTrack;
    }
    let idx = track.indexOf(this.state.positions[id]);
    console.log(idx, by);
    this.setState((prev) => {
      const pos = [...prev.positions];
      pos[id] = track[idx + by];
      return { ...prev, positions: pos };
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
  isAllClosed(i) {
    if (i === 0) {
      for (let j = 0; j < 4; j++) {
        if (this.state.pawnState[j]) {
          return false;
        }
      }
      return true;
    } else if (i === 1) {
      for (let j = 4; j < 8; j++) {
        if (this.state.pawnState[j]) {
          return false;
        }
      }
      return true;
    } else if (i === 2) {
      for (let j = 8; j < 12; j++) {
        if (this.state.pawnState[j]) {
          return false;
        }
      }
      return true;
    } else if (i === 3) {
      for (let j = 12; j < 16; j++) {
        if (this.state.pawnState[j]) {
          return false;
        }
      }
      return true;
    }
  }
  play(num) {
    if (this.state.turn === 0) {
      if (this.isAllClosed(0)) {
        if (num === 6) {
          this.setState((prev) => {
            const pawns = prev.pawnState;
            const pos = prev.positions;
            pos[0] = 120;
            pawns[0] = true;
            return { ...prev, pawnState: pawns, positions: pos };
          });
        }
      } else {
        this.move(this.state.turn, num);
        if (this.state.turn > 3) {
          this.setState((prev) => {
            return { ...prev, turn: 0 };
          });
        } else {
          this.setState((prev) => {
            if (prev.turn + 1 <= 3) return { ...prev, turn: prev.turn + 1 };
            else return { ...prev, turn: 0 };
          });
        }
      }
    } else if (this.state.turn === 1) {
      if (this.isAllClosed(1)) {
        if (num === 6) {
          this.setState((prev) => {
            const pawns = prev.pawnState;
            const pos = prev.positions;
            pos[4] = 26;
            pawns[4] = true;
            return { ...prev, pawnState: pawns, positions: pos };
          });
        }
      } else {
        this.move(this.state.turn, num);
        if (this.state.turn > 3) {
          this.setState((prev) => {
            return { ...prev, turn: 0 };
          });
        } else {
          this.setState((prev) => {
            if (prev.turn + 1 <= 3) return { ...prev, turn: prev.turn + 1 };
            else return { ...prev, turn: 0 };
          });
        }
      }
    } else if (this.state.turn === 2) {
      if (this.isAllClosed(2)) {
        if (num === 6) {
          this.setState((prev) => {
            const pawns = prev.pawnState;
            const pos = prev.positions;
            pos[8] = 168;
            pawns[8] = true;
            return { ...prev, pawnState: pawns, positions: pos };
          });
        }
      } else {
        this.move(this.state.turn, num);
        if (this.state.turn > 3) {
          this.setState((prev) => {
            return { ...prev, turn: 0 };
          });
        } else {
          this.setState((prev) => {
            if (prev.turn + 1 <= 3) return { ...prev, turn: prev.turn + 1 };
            else return { ...prev, turn: 0 };
          });
        }
      }
    } else if (this.state.turn === 3) {
      if (this.isAllClosed(3)) {
        if (num === 6) {
          this.setState((prev) => {
            const pawns = prev.pawnState;
            const pos = prev.positions;
            pos[0] = 262;
            pawns[0] = true;
            return { ...prev, pawnState: pawns, positions: pos };
          });
        }
      } else {
        this.move(this.state.turn, num);
        if (this.state.turn > 3) {
          this.setState((prev) => {
            return { ...prev, turn: 0 };
          });
        } else {
          this.setState((prev) => {
            if (prev.turn + 1 <= 3) return { ...prev, turn: prev.turn + 1 };
            else return { ...prev, turn: 0 };
          });
        }
      }
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.ids.length > 0 &&
          this.state.ids.map((id) => (
            <Cell
              cid={id}
              celltype={boardmap.get(id)}
              pawn={this.state.positions}
            />
          ))}
        {/* <button
          onClick={this.move.bind(
            this,
            "red",
            0,
            1 + Math.floor(Math.random() * 6)
          )}
        >
          Move
        </button> */}
        <Dice play={this.play.bind(this)} />
      </div>
    );
  }
}
