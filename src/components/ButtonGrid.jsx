import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    display: "grid",
    "grid-template-columns": "auto auto auto auto",
    "background-color": "#2196F3",
    padding: "10px"
  },
  gridItem: {
    "background-color": "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
    padding: "20px",
    "font-size": "30px",
    "text-align": "center"
  }
});

function ButtonGrid(props) {
  const classes = useStyles();
  let incrementor = 0;
  return (
    <div className={classes.gridContainer}>
      {props.children.map(child => {
        incrementor++;
        return (
          <div key={incrementor} className={classes.gridItem}>
            {child}
          </div>
        );
      })}
    </div>
  );
}

export default ButtonGrid;
