const Shifts = (props) => {
  const shifts = props.shifts;
  const tips = props.tips || {};

  return Object.entries(shifts).map(([day, shift]) => {
    const dayTip = tips[day];
    const tipText =
      dayTip != null && Number(dayTip) > 0
        ? `: $${Number(dayTip).toFixed(2)} tips`
        : "";

    return (
      <p className="paycheck__shift" key={day}>
        <strong>{day}:</strong>
        <span className="paycheck__shiftDetail">
          {shift}
          {tipText}
        </span>
      </p>
    );
  });
};

export default Shifts;
