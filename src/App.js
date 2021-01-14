import React from "react";

const App = () => {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: "16", //단위 생략시 px로 지정됨
  };
  return <div style={style}>{name}</div>;
};

export default App;
