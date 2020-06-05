import React from "react";
import Pawn from "./Pawn";

export default function Cell(props) {
  return (
    <div
      className="cell"
      style={{
        backgroundColor: props.celltype.color,
        textAlign: "center",
        fontSize: "8px",
      }}
    >
      {props.pawn.map((item, idx) => {
        if (idx >= 0 && idx <= 3 && item == props.cid)
          return <Pawn color="red" />;
        else if (idx >= 4 && idx <= 7 && item == props.cid)
          return <Pawn color="green" />;
        else if (idx >= 8 && idx <= 11 && item == props.cid)
          return <Pawn color="blue" />;
        else if (idx >= 12 && idx <= 15 && item == props.cid)
          return <Pawn color="yellow" />;
      })}

      {(props.cid == 155 ||
        props.cid == 41 ||
        props.cid == 133 ||
        props.cid == 247) && <span className="stop">X</span>}
    </div>
  );
}
