import "./Checkbox.css";
import * as Utils from "../../utils/utils.js";

export default function Checkbox(props) {
  const classes = Utils.generateClassList([
    "checkbox",
    props.fullWidth ? "checkbox--full-width" : "",
  ]);

  return (
    <label className={classes}>
      <span className="chekcbox__label">{props.label}</span>
      <input
        className="checkbox__field"
        type="checkbox"
        name={props.name}
        id={props.id}
        checked={props.isChecked}
        onChange={props.onChange}
        aria-errormessage={props.errorMessageId}
        aria-invalid={props.isInvalid}
      />
      <span className="checkbox__checkmark" />
    </label>
  );
}
