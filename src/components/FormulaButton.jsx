import React from "react";
import Button from "@material-ui/core/Button";

function FormulaButton({text, onPress}) {

    function buttonClick() {
        // do some side-effects
        onPress(text);
    }

    return <Button onClick={() => { buttonClick() }}>{text}</Button>;
}

export default FormulaButton;