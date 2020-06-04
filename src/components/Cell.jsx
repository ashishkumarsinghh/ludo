import React from "react";

export default function Cell(props) {
  return (
    <div
      class="cell"
      style={{ backgroundColor: props.celltype.color, textAlign: "center" }}
    >
      {props.cid}
    </div>
  );
}
