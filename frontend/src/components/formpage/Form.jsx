import { useState } from "react";
import WeekRange from "./WeekRange.jsx";
import Day from "./Day.jsx";
import Tips from "./Tips.jsx";
import Notes from "./Notes.jsx";
import Footer from "./Footer.jsx";
import api from "../../services/api.js";
import ExpectedPay from "./ExpectedPay";

const Form = ({
  setCurrentPage,
  setRecords,
  editingPaycheck,
  setEditingPaycheck,
}) => {
  const [weekStart, setWeekStart] = useState(editingPaycheck?.weekStart || "");
  const [weekEnd, setWeekEnd] = useState(editingPaycheck?.weekEnd || "");
  const [shifts, setShifts] = useState(editingPaycheck?.shifts || {});
  const [tips, setTips] = useState(editingPaycheck?.tips || {});
  const [notes, setNotes] = useState(editingPaycheck?.notes || "");
  const [expectedPay, setExpectedPay] = useState(
    editingPaycheck?.expected || 0,
  );

  const resetForm = () => {
    setWeekStart("");
    setWeekEnd("");
    setShifts({});
    setTips({});
    setNotes("");
    setEditingPaycheck(null);
    setCurrentPage("homepage");
  };

  const handleSave = (event) => {
    event.preventDefault();

    const paycheckObject = {
      weekStart,
      weekEnd,
      shifts,
      tips,
      notes,
      expected: expectedPay,
    };

    if (editingPaycheck) {
      paycheckObject.received = editingPaycheck.received;
      api
        .updatePaycheck(editingPaycheck.id, paycheckObject)
        .then((editedPaycheck) => {
          setRecords((prev) =>
            prev.map((record) =>
              record.id === editingPaycheck.id ? editedPaycheck : record,
            ),
          );
          resetForm();
        });
    } else {
      api.postPaycheck(paycheckObject).then((returnedPaycheck) => {
        setRecords((prev) => [...prev, returnedPaycheck]);
        resetForm();
      });
    }
  };

  return (
    <div className="form">
      <form onSubmit={handleSave}>
        <WeekRange
          weekStart={weekStart}
          weekEnd={weekEnd}
          setWeekStart={setWeekStart}
          setWeekEnd={setWeekEnd}
        />
        <Day shifts={shifts} setShifts={setShifts} />
        <Tips tips={tips} setTips={setTips} shifts={shifts} />
        <Notes notes={notes} setNotes={setNotes} />
        <ExpectedPay
          expectedPay={expectedPay}
          shifts={shifts}
          tips={tips}
          setExpectedPay={setExpectedPay}
        />
        <Footer handleSave={handleSave} />
      </form>
    </div>
  );
};

export default Form;
