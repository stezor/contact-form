import "./Radio.css";
import * as Utils from "../../utils/utils.js";

export default function Radio(props) {
  const classes = Utils.generateClassList([
    "radio",
    props.fullWidth ? "radio--full-width" : "",
    props.isSelected ? "radio--selected" : "",
  ]);

  return (
    <label className={classes}>
      <span className="radio__label">{props.label}</span>
      <input
        className="radio__field"
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
        aria-errormessage={props.errorMessageId}
        aria-invalid={props.isInvalid}
      />
      <span className="radio__button" />
    </label>
  );
}
