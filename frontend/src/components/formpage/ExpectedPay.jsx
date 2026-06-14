const ExpectedPay = (props, shifts, tips, setExpectedPay) => {
  const expectedPay = props.expectedPay;
  const totalShifts = props.shifts;
  const totalTips = props.tips;
  const set_expectedPay = props.setExpectedPay;

  const finalPay = totalShiftPay(totalShifts) + sumTotalTips(totalTips);
  const finalPayAfterTax = (finalPay * 0.9).toFixed(2);

  if (Object.values(totalTips).length == 0) {
    return;
  } else {
    set_expectedPay(finalPayAfterTax);
    return <p className="expectedPay">Total Pay: ${finalPayAfterTax}</p>;
  }
};

function totalShiftPay(shifts) {
  let allShiftPay = 0;

  Object.entries(shifts).forEach(([day, shift]) => {
    if (shift == "Full") {
      allShiftPay += 90;
    } else if (shift == "Lunch" || shift == "Dinner") allShiftPay += 45;
  });

  return allShiftPay;
}

function sumTotalTips(tips) {
  let allTips = 0;

  Object.entries(tips).forEach(([day, tips]) => (allTips += Number(tips)));
  return allTips;
}

export default ExpectedPay;
