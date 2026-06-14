const Tips = (props) => {
  const setTips = props.setTips;
  const shifts = props.shifts;
  const tips = props.tips;

  const handleTips = (e, day) => {
    setTips((prev) => {
      return { ...prev, [day]: e.target.value };
    });
  };

  return Object.entries(shifts).map(([day, shift]) => {
  
    return (
      <div className="tips" key={day}>
        <div className="tips__dayInfo">
          <p className="tips__day">{day}</p>
          <p className="tips__shift">{shift}</p>
        </div>
        <div className="tips__amountInfo">
          <p className="tips__amountLabel">Tips: </p>
          <input
            type="number"
            value={tips[day]}
            required
            className="tips__amount"
            onChange={(e) => handleTips(e, day)}
          />
        </div>
      </div>
    );
  });
};

export default Tips;
