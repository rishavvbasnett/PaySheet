const Expected = (props) => {
  const expected = props.expected;
  return <p className="paycheck__expected">Expected: ${expected.toFixed(2)}</p>;
};

export default Expected;
