const Day = (props) => {
  const setShifts = props.setShifts;

  const allWeekDays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const handleLunch = (day) => {
    setShifts((prev) => ({ ...prev, [day]: "Lunch" }));
  };
  const handleDinner = (day) => {
    setShifts((prev) => ({ ...prev, [day]: "Dinner" }));
  };
  const handleFull = (day) => {
    setShifts((prev) => ({ ...prev, [day]: "Full" }));
  };

  return allWeekDays.map((day) => {
    return (
      <div className={`day${day}`}>
        <p className="day__title">{day}</p>
        <button
          className="day__lunch"
          type="button"
          onClick={() => handleLunch(day)}
        >
          Lunch
        </button>
        <button
          className="day__dinner"
          type="button"
          onClick={() => {
            handleDinner(day);
          }}
        >
          Dinner
        </button>
        <button
          className="day__full"
          type="button"
          onClick={() => handleFull(day)}
        >
          Full
        </button>
      </div>
    );
  });
};

export default Day;
