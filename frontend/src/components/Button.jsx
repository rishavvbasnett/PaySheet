const Button = (props) => {
  const text = props.text;
  const onClick = props.onClick;
  const className = props.className;
  const paycheckId = props.paycheckId;

  return (
    <button onClick={onClick} className={className} data-id={paycheckId}>
      {text}
    </button>
  );
};

export default Button;
