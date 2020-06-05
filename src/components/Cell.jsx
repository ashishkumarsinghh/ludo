import React from "react";
import Pawn from "./Pawn";

export default function Cell(props) {
  return (
    <div
      className="cell"
      style={{ backgroundColor: props.celltype.color, textAlign: "center" }}
    >
      {props.cid === props.pawn && <Pawn />} {props.cid}
    </div>
  );
}
