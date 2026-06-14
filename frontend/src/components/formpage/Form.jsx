import { useState } from "react";
import WeekRange from "./WeekRange.jsx";
import Day from "./Day.jsx";
import Tips from "./Tips.jsx";
import Notes from "./Notes.jsx";
import Footer from "./Footer.jsx";
import api from "../../services/api.js";
import ExpectedPay from "./ExpectedPay";

const Form = ({ setCurrentPage, setRecords }) => {
  const [weekStart, setWeekStart] = useState("");
  const [weekEnd, setWeekEnd] = useState("");
  const [shifts, setShifts] = useState({});
  const [tips, setTips] = useState({});
  const [notes, setNotes] = useState("");
  const [expectedPay, setExpectedPay] = useState(0);

  const handleSave = (event) => {
    event.preventDefault();
    console.log("SUMITTED THE FORM");
    const PaycheckObject = {
      weekStart,
      weekEnd,
      shifts,
      tips,
      notes,
      expected: expectedPay,
    };
    console.log(PaycheckObject);
    api.postPaycheck(PaycheckObject).then((returnedPaycheck) => {
      console.log(returnedPaycheck);
      setRecords((prev) => [...prev, returnedPaycheck]);
    });

    setWeekStart("");
    setWeekEnd("");
    setShifts({});
    setTips({});
    setNotes("");
    setCurrentPage("homepage");
  };

  const handleBack = () => {
    setCurrentPage("homepage");
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
        <Footer
          handleSave={handleSave}
          handleBack={handleBack}
          setCurrentPage={setCurrentPage}
        />
      </form>
    </div>
  );
};

export default Form;
