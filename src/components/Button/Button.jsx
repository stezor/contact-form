import "./Button.css";
import * as Utils from "../../utils/utils.js";

export default function Button(props) {
  const classes = Utils.generateClassList([
    "button",
    props.fullWidth ? "button--full-width" : "",
  ]);

  return (
    <button className={classes} type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
