import { useState } from "react";
import InsertButton from "./InsertButton";
import { Box, Input, Grid } from "@chakra-ui/react";

const Calculator = () => {
  const [formula, setFormula] = useState("");
  const [decimalPoint, setdecimalPoint] = useState(true);
  const numbers = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
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
      <Input borderColor="black.500" defaultValue={formula} />
      <Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={1}>
          {operators.map((operator) => (
            <InsertButton
              key={operator}
              onClick={() => operatorButton(operator)}
            >
              {operator}
            </InsertButton>
          ))}
          {numbers.map((number) => (
            <InsertButton key={number} onClick={() => numberButton(number)}>
              {number}
            </InsertButton>
          ))}

          <InsertButton onClick={() => decimalPointButton(".")}>.</InsertButton>

          <InsertButton onClick={() => sumButton()}>=</InsertButton>

          <InsertButton onClick={() => clearButton()}>C</InsertButton>
        </Grid>
      </Box>
    </>
  );
};

export default Calculator;
