import "./Snackbar.css";
import * as Utils from "../../utils/utils.js";
import { useEffect } from "react";

export default function Snackbar(props) {
  const classes = Utils.generateClassList([
    "snackbar",
    `snackbar--${props.isOpen ? "show" : "hide"}`,
  ]);

  useEffect(() => {
    if (props.isOpen) {
      setTimeout(
        () => {
          props.onAutoClose();
        },
        props.autoCloseTimeout ? props.autoCloseTimeout : 7000,
      );
    }
  }, [props.isOpen]);

  return (
    <div role={props.role ? props.role : "alert"} className={classes}>
      {props.children}
    </div>
  );
}
