import React from "react";
import FormulaButton from "../components/FormulaButton"
import ButtonGrid from "../components/ButtonGrid"
import FormulaDisplay from "../components/FormulaDisplay"

function Calculator() {
    return <>
        <FormulaDisplay></FormulaDisplay>
        <ButtonGrid>
            <FormulaButton text="CE" />
            <FormulaButton text="C" />
            <FormulaButton text="<=" />
            <FormulaButton text="/" />
            <FormulaButton text="7" />
            <FormulaButton text="8" />
            <FormulaButton text="9" />
            <FormulaButton text="X" />
        </ButtonGrid>
    </>;
}

export default Calculator;