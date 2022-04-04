import React from "react";
import Card from "./Card";

function Container(props) {
  console.log(props.CardNo);
  return (
    <div className="bg-zinc-600 flex flex-wrap justify-around">
      {[...Array(props.CardNo)].map((e, i) => (
        <Card />
      ))}
    </div>
  );
}

export default Container;
