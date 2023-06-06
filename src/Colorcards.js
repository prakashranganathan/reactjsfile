import React, { useState } from "react";
function Colorcards() {
  const [CardOne, CardTwo, CardThree, CardFour, CardFive] = [
    "darkred",
    "lightgreen",
    "blue",
    "yellow",
    "darkgray",
  ];
  const [backgColor, setBackgroundColor] = useState("");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [view,setView]=useState();
  const [view1,setView1]=useState();
  const [view2,setView2]=useState();
  const [view3,setView3]=useState();
  const [view4,setView4]=useState();
  let background = backgColor;
  function newClick() {
    setCount(count + 1);
    setCount1(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
    setView (count === 1 ? "4px solid gold" : "4px solid white");
  }
  function newClick1() {
    setCount1(count1 + 1);
    setCount(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
    setView1 (count1 === 1 ? "4px solid gold" : "4px solid white");
  }
  function newClick2() {
    setCount2(count2 + 1);
    setCount(0);
    setCount1(0);
    setCount3(0);
    setCount4(0);
    setView2 (count2 === 1 ? "4px solid gold" : "4px solid white");

  }
  function newClick3() {
    setCount3(count3 + 1);
    setCount(0);
    setCount1(0);
    setCount2(0);
    setCount4(0);
    setView3 (count3 === 1 ? "4px solid gold" : "4px solid white");
    let couting=(count3>=2) ? setCount3(0):"";
  }
  function newClick4() {
    setCount4(count4 + 1);
    setCount(0);
    setCount1(0);
    setCount2(0);
    setCount3(0);
    setView4 (count4 === 1 ? "4px solid gold" : "4px solid white");

  }
  console.log(count);

  return (
    <div>
      <div
        style={{
          backgroundColor: background,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "620px",
          textAlign: "center",
          paddingLeft: "9%",
        }}
      >
        <div
          className="card card-one"
          style={{
            backgroundColor: CardOne,
            width: "200px",
            height: "200px",
            border: view,
            margin: "8px",
          }}
          onClick={() => {
            setBackgroundColor(CardOne);
            newClick();
          }}
        >
          <h1 style={{ padding: "50px" }}>RCB</h1>
        </div>
        <div
          className="card card-two"
          style={{
            backgroundColor: CardTwo,
            width: "200px",
            height: "200px",
            border: view1,
            margin: "8px",
          }}
          onClick={() => {setBackgroundColor(CardTwo); newClick1()}}
        >
          <h1 style={{ padding: "50px" }}>LSG</h1>
        </div>
        <div
          className="card card-three"
          style={{
            backgroundColor: CardThree,
            width: "200px",
            height: "200px",
            border: view2,
            margin: "8px",
          }}
          onClick={() => {
            setBackgroundColor(CardThree);
            newClick2();
          }}
        >
          <h1 style={{ padding: "50px" }}>MI</h1>
        </div>
        <div
          className="card card-four"
          style={{
            backgroundColor: CardFour,
            width: "200px",
            height: "200px",
            border: view3,
            margin: "8px",
          }}
          onClick={() => {
            setBackgroundColor(CardFour);
            newClick3();
          }}
        >
          <h1 style={{ padding: "50px" }}>CSK</h1>
        </div>
        <div
          className="card card-five"
          style={{
            backgroundColor: CardFive,
            width: "200px",
            height: "200px",
            border: view4,
            margin: "8px",
          }}
          onClick={() => {
            setBackgroundColor(CardFive);
            newClick4();
          }}
        >
          <h1 style={{ padding: "50px" }}>GT</h1>
        </div>
      </div>
    </div>
  );
}
export default Colorcards;
