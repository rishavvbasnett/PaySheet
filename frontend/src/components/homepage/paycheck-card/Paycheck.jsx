import Week from "./Week";
import Expected from "./Expected";
import Shifts from "./Shifts";
import Received from "./Received";
import Button from "../../Button";
import api from "./../../../services/api.js";
import { useState, useEffect } from "react";

const Paycheck = (props) => {
  const [enterAmount, setEnterAmount] = useState();

  const paycheck = props.paycheck;
  const records = props.records;
  const setRecords = props.setRecords;

  const handleConfirm = (e) => {
    const paycheckId = e.target.dataset.id;
    const updatedPaycheck = { ...paycheck, received: enterAmount };
    api.updatePaycheck(paycheckId, updatedPaycheck).then((editedPaycheck) => {
      setRecords((prev) => {
        return prev.map((paycheck) => {
          if (paycheck.id == paycheckId) {
            return updatedPaycheck;
          } else {
            return paycheck;
          }
        });
      });
    });
  };

  const handleClear = (e) => {
    const paycheckId = e.target.dataset.id;
    const updatedPaycheck = { ...paycheck, received: null };
    api.updatePaycheck(paycheckId, updatedPaycheck).then((updatedPaycheck) => {
      setRecords((prev) =>
        prev.map((paycheck) => {
          if (paycheck.id == paycheckId) {
            return updatedPaycheck;
          } else {
            return paycheck;
          }
        }),
      );
      setEnterAmount("");
    });
  };

  const handleDelete = (e) => {
    const paycheckId = e.target.dataset.id;
    api
      .deletePaycheck(paycheckId)
      .then((deletedPaycheck) =>
        setRecords((prev) =>
          prev.filter((paycheck) => paycheck.id != deletedPaycheck.id),
        ),
      );
  };

  return (
    <div className="paycheck">
      <div className="paycheck__mainInfo">
        <Week weekStart={paycheck.weekStart} weekEnd={paycheck.weekEnd} />
        <Expected expected={paycheck.expected} />
        <div className="paycheck__shifts">
          <Shifts shifts={paycheck.shifts} />
        </div>
        {paycheck.notes ? (
          <p className="paycheck__notes">{paycheck.notes}</p>
        ) : (
          ""
        )}
      </div>

      <div className="paycheck__amountReceived">
        <Received received={paycheck.received} />
        <div className="paycheck__amount">
          <input
            type="number"
            value={enterAmount}
            onChange={(e) => setEnterAmount(e.target.value)}
            className="paycheck__enterAmount"
          />
          <Button
            className="paycheck__confirm"
            text="Confirm"
            onClick={(e) => handleConfirm(e)}
            paycheckId={paycheck.id}
          />
          <Button
            className="paycheck__clear"
            text="Clear"
            onClick={(e) => handleClear(e)}
            paycheckId={paycheck.id}
          />
          <Button
            className="paycheck__delete"
            text="Delete"
            onClick={(e) => handleDelete(e)}
            paycheckId={paycheck.id}
          />
        </div>
      </div>
    </div>
  );
};

export default Paycheck;
