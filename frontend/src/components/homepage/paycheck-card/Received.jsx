const Received = (props) => {
  const received = props.received;
  if (received) {
    return <p className="paycheck__received">Received: ${received}</p>;
  } else {
    return <p className="paycheck__pending">Pending</p>;
  }
};

export default Received;
