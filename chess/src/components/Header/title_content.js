import React from "react";
import { Link } from "react-router-dom";

function Titlecontent(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="content_wrap">
      <button onClick={props.onClose}>close</button>
      <Link to="../pages/home/index.js">home</Link>
    </div>
  );
}

export default Titlecontent;
