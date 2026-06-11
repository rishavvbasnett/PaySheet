
const Paycheck = (props) => {
  const paycheck = props.paycheck
  console.log(paycheck)
  return (
    <>
    <p>{paycheck.expected}</p>
    <p>{paycheck.week}</p>
    </>
  )
}

export default Paycheck