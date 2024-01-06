import { useState } from "react";
import InsertButton from "./components/InsertButton";

const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [decimalPoint, setdecimalPoint] = useState(true);
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["+", "-", "*", "/"];

  const numberButton = (num: string) => {
    setFormula((prev) => prev + num);
  };

  const operatorButton = (operator: string) => {
    const lastChar = formula.slice(-1);
    if (!operators.includes(lastChar)) {
      setFormula((prev) => prev + operator);
      setdecimalPoint(true);
    }
  };

  const decimalPointButton = (dec: string) => {
    if (decimalPoint) {
      setFormula((prev) => prev + dec);
      setdecimalPoint(false);
    }
  };

  function safeEval(val: string) {
    return Function('"use strict";return (' + val + ")")();
  }

  //　許可された文字以外入力されないようにvalidationをかける
  function isValidInput(input: string): boolean {
    const validChars = new RegExp(`^[\\d+\\-*/.]*$`);
    return validChars.test(input);
  }

  const sumButton = () => {
    if (isValidInput(formula)) {
      const lastChar = formula.slice(-1);
      if (!operators.includes(lastChar)) {
        try {
          var result = safeEval(formula);
          setFormula(result.toFixed(10).toString());
          setdecimalPoint(true);
        } catch (error) {
          setFormula("Error");
        }
      }
    }
  };

  const clearButton = () => {
    setFormula("");
    setdecimalPoint(true);
  };

  return (
    <>
      <input defaultValue={formula} />

      {numbers.map((number) => (
        <InsertButton key={number} onClick={() => numberButton(number)}>
          {number}
        </InsertButton>
      ))}
      {operators.map((operator) => (
        <InsertButton key={operator} onClick={() => operatorButton(operator)}>
          {operator}
        </InsertButton>
      ))}
      <InsertButton onClick={() => sumButton()}>=</InsertButton>
      <InsertButton onClick={() => decimalPointButton(".")}>.</InsertButton>
      <InsertButton onClick={() => clearButton()}>C</InsertButton>
    </>
  );
};

export default Calculator;
