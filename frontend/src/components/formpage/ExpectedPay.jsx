import { useEffect } from "react";

const ExpectedPay = (props) => {
  const totalShifts = props.shifts;
  const totalTips = props.tips;
  const set_expectedPay = props.setExpectedPay;

  const finalPay = totalShiftPay(totalShifts) + sumTotalTips(totalTips);
  const finalPayAfterTax = (finalPay * 0.9).toFixed(2);

  useEffect(() => {
    set_expectedPay(finalPayAfterTax);
  }, [finalPayAfterTax, set_expectedPay]);

  if (Object.values(totalShifts).length === 0) {
    return "";
  }

  return <p className="expectedPay">Total Pay: ${finalPayAfterTax}</p>;
};

function totalShiftPay(shifts) {
  let allShiftPay = 0;

  Object.entries(shifts).forEach(([day, shift]) => {
    if (shift === "Full") {
      allShiftPay += 90;
    } else if (shift === "Lunch" || shift === "Dinner") allShiftPay += 45;
  });

  return allShiftPay;
}

function sumTotalTips(tips) {
  let allTips = 0;

  Object.entries(tips).forEach(([day, tips]) => (allTips += Number(tips)));
  return allTips;
}

export default ExpectedPay;
