import Week from "./Week";
import Expected from "./Expected";
import Shifts from "./Shifts";
import Received from "./Received";
import Button from "../../Button";
import Input from "../../Input";

const Paycheck = (props) => {
  const paycheck = props.paycheck;
  console.log(props.paycheck);
  return (
    <div className="paycheck">
      <div className="paycheck__mainInfo">
        <Week week={paycheck.week} />
        <Expected expected={paycheck.expected} />
        <div className="paycheck__shifts">
          <Shifts shifts={paycheck.shifts} />
        </div>
      </div>
      <div className="paycheck__amountReceived">
        <Received paid={paycheck.paid} received={paycheck.received} />
        <div className="paycheck__amount">
          <Input type="text" className="paycheck__enterAmount" />
          <Button className="paycheck__confirm" text="Confirm" />
          <Button className="paycheck__clear" text="Clear" />
        </div>
      </div>
    </div>
  );
};

export default Paycheck;
