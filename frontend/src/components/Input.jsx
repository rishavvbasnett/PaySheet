const Input = (props) => {
  const className = props.className;
  const type = props.type;
  return <input className={className} type={type}></input>;
};

export default Input;
