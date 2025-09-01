import "./Textarea.css";

export default function Textarea(props) {
  return (
    <label className="textarea">
      <span className="textarea__label">{props.label}</span>
      <textarea
        className="textarea__field"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        aria-errormessage={props.errorMessageId}
        aria-invalid={props.isInvalid}
      />
    </label>
  );
}
