import React from "react";
import { useState } from "react";
export default function Dice(props) {
  const [state, setstate] = useState(1);
  const roll = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setstate(num);
    props.play(num);
  };
  return (
    <div className="dice" onClick={roll}>
      <img src={"./dices/Alea_" + state + ".png"} alt="dice" />
    </div>
  );
}
