import Week from "./Week";
import Expected from "./Expected";
import Shifts from "./Shifts";
import Received from "./Received";
import Button from "../../Button";
import api from "./../../../services/api.js";
import { useState } from "react";

const Paycheck = (props) => {
  const [enterAmount, setEnterAmount] = useState("");

  const paycheck = props.paycheck;
  const setRecords = props.setRecords;
  const setCurrentPage = props.setCurrentPage;
  const setEditingPaycheck = props.setEditingPaycheck;

  const isPaid = paycheck.received != null && paycheck.received !== "";

  const handleCardClick = (e) => {
    // Ignore clicks coming from the received-controls area
    if (e.target.closest(".paycheck__amount")) return;
    setEditingPaycheck(paycheck);
    setCurrentPage("formpage");
  };

  const handleConfirm = (e) => {
    const paycheckId = e.target.dataset.id;
    const updatedPaycheck = { ...paycheck, received: enterAmount };
    api.updatePaycheck(paycheckId, updatedPaycheck).then((editedPaycheck) => {
      setRecords((prev) =>
        prev.map((record) =>
          record.id == paycheckId ? editedPaycheck : record,
        ),
      );
    });
  };

  const handleClear = (e) => {
    const paycheckId = e.target.dataset.id;
    const updatedPaycheck = { ...paycheck, received: null };
    api.updatePaycheck(paycheckId, updatedPaycheck).then((editedPaycheck) => {
      setRecords((prev) =>
        prev.map((record) =>
          record.id == paycheckId ? editedPaycheck : record,
        ),
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
          prev.filter((record) => record.id != deletedPaycheck.id),
        ),
      );
  };

  return (
    <div
      className={isPaid ? "paycheck paycheck--paid" : "paycheck"}
      onClick={handleCardClick}
    >
      <div className="paycheck__mainInfo">
        <Week weekStart={paycheck.weekStart} weekEnd={paycheck.weekEnd} />
        <Expected expected={paycheck.expected} />
        <Received received={paycheck.received} />
      </div>

      <div className="paycheck__body">
        <div className="paycheck__shifts">
          <Shifts shifts={paycheck.shifts} tips={paycheck.tips} />
          {paycheck.notes ? (
            <p className="paycheck__notes">Note: {paycheck.notes}</p>
          ) : (
            ""
          )}
        </div>

        <div className="paycheck__amount">
          <input
            type="number"
            value={enterAmount}
            placeholder="0"
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
