const WeekRange = (props) => {
  const weekStart = props.weekStart;
  const weekEnd = props.weekEnd;
  const setWeekStart = props.setWeekStart;
  const setWeekEnd = props.setWeekEnd;

  return (
    <div className="weekrange">
      <p className="weekrange__title">Week Start & End</p>
      <div className="weekrange__container">
        <input
          className="weekrange__start"
          type="date"
          value={weekStart}
          required
          onChange={(e) => setWeekStart(e.target.value)}
        />
        <p> to </p>
        <input
          className="weekrange__end"
          value={weekEnd}
          required
          type="date"
          onChange={(e) => setWeekEnd(e.target.value)}
        />
      </div>
    </div>
  );
};

export default WeekRange;
