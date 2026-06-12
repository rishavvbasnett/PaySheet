const Button = (props) => {
  const text = props.text;
  const onClick = props.onClick;
  const className = props.className;
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
