import "./Input.scss";

function Input({
  customId,
  label,
  type,
  customClass,
  name,
  handleChange,
  defaultValue,
  disabled,
}) {
  // Redigerade koden lite här och i BookingInfo. Lade till en htmlFor och ett id för att koppla ihop label och input.
  //Så jag kunde använda screen.getByLabelText() istället för getByText().
  return (
    <section className="input">
      <label className="input__label" htmlFor={customId}>
        {label}
      </label>
      <input
        id={customId}
        type={type}
        className={`input__field ${customClass ? customClass : ""}`}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue ? defaultValue : ""}
        disabled={disabled}
      />
    </section>
  );
}

export default Input;
