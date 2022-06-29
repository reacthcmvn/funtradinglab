import React from "react";
// import classes from "./HeadBox.module.css";

const HeadBox = (props) => {
  return (
    <div className="border-y-[1.2px] border-yellow-400/60 border-solid p-1">
      {props.children}
    </div>
    // <div className={classes.boxe}>{props.children}</div>
  );
};

export default HeadBox;
