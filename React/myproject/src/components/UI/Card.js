// import '../UI/card.css';

// function Card(){
//     return <div className="card"></div>;
// }

// export default Card;

import React from "react";
import "../UI/Card";
export default function Card(props) {
  const classes = props.className;
  return <div className={classes}>{props.children}</div>;
}