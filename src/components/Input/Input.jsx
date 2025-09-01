import "./Input.css";

export default function Input(props) {
  return (
    <label className="input">
      <span className="input__label">{props.label}</span>
      <input
        className="input__field"
        type={props.type}
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        aria-errormessage={props.errorMessageId}
        aria-invalid={props.isInvalid}
      />
    </label>
  );
}
