const Shifts = (props) => {
  const shifts = props.shifts;

  return Object.entries(shifts).map((part) => (
    <p className="paycheck__shift" key={part[0]}>
      <strong>{part[0]}</strong>: {part[1]}
    </p>
  ));
};

export default Shifts;
