const Input = ({
    type,
    name,
    id,
    className,
    placeholder,
    onChange,
    value,
    error,
    onBlur
}) => (
  <>
    {error && <p className="msg-error">{error}</p>}
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
    />
  </>
);

export default Input;