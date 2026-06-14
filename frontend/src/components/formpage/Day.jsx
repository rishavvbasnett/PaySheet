const Day = (props) => {
  const shifts = props.shifts;
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
      <div className="day" key={day}>
        <p className="day__title">{day}</p>
        <button
          className={
            shifts[day] === "Lunch" ? "day__lunch day__active" : "day__lunch"
          }
          type="button"
          onClick={() => handleLunch(day)}
        >
          Lunch
        </button>
        <button
          className={
            shifts[day] === "Dinner" ? "day__dinner day__active" : "day__dinner"
          }
          type="button"
          onClick={() => handleDinner(day)}
        >
          Dinner
        </button>
        <button
          className={
            shifts[day] === "Full" ? "day__full day__active" : "day__full"
          }
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
