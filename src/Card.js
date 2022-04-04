import React from "react";
import { useState } from "react";

function Card(props) {
  const [card, setCard] = useState("front");

  return (
    <>
      {card === "front" ? (
        <div
          className="bg-yellow-300 w-52 h-52 "
          value={card}
          onClick={() => {
            setCard("back");
          }}
        >
          Front Card
        </div>
      ) : (
        <div
          className="bg-yellow-300 w-52 h-52 "
          value={card}
          onClick={() => {
            setCard("front");
          }}
        >
          Back Card
        </div>
      )}
    </>
  );
}

export default Card;
