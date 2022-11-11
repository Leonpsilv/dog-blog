const Input = ({
    type,
    name,
    id,
    className,
    placeholder,
    handleChage,
    password
}) => (
  <input
    type={type}
    name={name}
    id={id}
    className={className}
    placeholder={placeholder}
    onChange={handleChage}
    value={password}
  />
);

export default Input;