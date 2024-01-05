import React, { useState } from "react";
import InsertButton from "./components/InsertButton";

const Calculator = () => {
  const [num, setNum] = useState("");
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["+", "-", "*", "/"];

  const numberButton = (x: string) => {
    setNum(prev => prev + x);
  };

  const operatorButton = (y: string) => {
    if (!["+", "-", "*", "/"].includes(num.slice(-1))) {
      setNum(prev => prev + y);
    }
  };


  const sumButton = () => {
    if (!["+", "-", "*", "/"].includes(num.slice(-1))) {
      setNum(eval(num));
    }
  };

  return (
    <>
      <input value={num} />

      {numbers.map((number) => (
        <InsertButton key={number} onClick={() => numberButton(number)}>
          {number}
        </InsertButton>
      ))}
      {operators.map((ope) => (
        <InsertButton key={ope} onClick={() => operatorButton(ope)}>
          {ope}
        </InsertButton>
      ))}
      <InsertButton onClick={() => sumButton()}>=</InsertButton>
    </>
  );
};

export default Calculator;
