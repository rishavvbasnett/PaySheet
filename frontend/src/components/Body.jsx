import Paycheck from "./Paycheck";

const Body = (props) => {
  const records = props.records;
   return records.map((paycheck) => {
    return <Paycheck paycheck={paycheck} />;
  });
};

export default Body;
