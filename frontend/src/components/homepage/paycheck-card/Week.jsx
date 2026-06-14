const Week = (props) => {
  const weekStart = props.weekStart;
  const weekEnd = props.weekEnd;

  const formattedWeekStart = new Date(
    weekStart + "T00:00:00",
  ).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedWeekEnd = new Date(weekEnd + "T00:00:00").toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <p className="paycheck__week">{`${formattedWeekStart} - ${formattedWeekEnd}`}</p>
  );
};

export default Week;
