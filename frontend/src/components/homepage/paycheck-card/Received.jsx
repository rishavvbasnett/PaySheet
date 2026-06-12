const Received = (props) => {
  const paid = props.paid;
  const received = props.received;
  if (paid && received) {
    return <p className="paycheck__received">Received: ${received}</p>;
  } else {
    return <p className="paycheck__pending">Pending</p>;
  }
};

export default Received;
