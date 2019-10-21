import React from "react";
import FormulaButton from "../components/FormulaButton";
import ButtonGrid from "../components/ButtonGrid";
import FormulaDisplay from "../components/FormulaDisplay";
import { useState } from "react";

function Calculator() {
  const [currentFormula, setCurrentFormula] = useState([]);
  function onPress(btnValue) {
    var newFormula = currentFormula + btnValue;
    setCurrentFormula(newFormula);
  }

  return (
    <>
      <FormulaDisplay textToDisplay={currentFormula}></FormulaDisplay>
      <ButtonGrid>
        <FormulaButton text="CE" onPress={onPress} />
        <FormulaButton onPress={onPress} text="C" />
        <FormulaButton onPress={onPress} text="<=" />
        <FormulaButton onPress={onPress} text="/" />
        <FormulaButton onPress={onPress} text="7" />
        <FormulaButton onPress={onPress} text="8" />
        <FormulaButton onPress={onPress} text="9" />
        <FormulaButton onPress={onPress} text="X" />
        <FormulaButton onPress={onPress} text="4" />
        <FormulaButton onPress={onPress} text="5" />
        <FormulaButton onPress={onPress} text="6" />
        <FormulaButton onPress={onPress} text="-" />
        <FormulaButton onPress={onPress} text="1" />
        <FormulaButton onPress={onPress} text="2" />
        <FormulaButton onPress={onPress} text="3" />
        <FormulaButton onPress={onPress} text="+" />
        <FormulaButton onPress={onPress} text="+/-" />
        <FormulaButton onPress={onPress} text="0" />
        <FormulaButton onPress={onPress} text="." />
        <FormulaButton onPress={onPress} text="=" />
      </ButtonGrid>
    </>
  );
}

export default Calculator;
