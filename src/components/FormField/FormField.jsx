import "./FormField.css";
import * as Utils from "../../utils/utils.js";

export default function FormField(props) {
  const classes = Utils.generateClassList([
    "form-field",
    props.fullWidth ? "form-field--full-width" : "",
  ]);

  return (
    <fieldset className={classes}>
      {props.legend && (
        <legend className="form-field__label">{props.legend}</legend>
      )}
      {props.children}
      {props.isInvalid && (
        <p className="form-field__error-message" id={props.errorMessageId}>
          {props.errorMessage}
        </p>
      )}
    </fieldset>
  );
}
