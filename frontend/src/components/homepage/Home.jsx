import Paycheck from "./paycheck-card/Paycheck.jsx";
import Button from "../Button.jsx";
import Header from "../Header.jsx";

const Home = (props) => {
  const records = props.records;
  const setRecords = props.setRecords;

  const setCurrentPage = props.setCurrentPage;
  const setEditingPaycheck = props.setEditingPaycheck;

  const handleNewPaycheck = () => {
    setEditingPaycheck(null);
    setCurrentPage("formpage");
  };

  const received = records.filter((paycheck) => paycheck.received != null);
  const lastReceived = received.sort(
    (a, b) => new Date(b.weekEnd) - new Date(a.weekEnd),
  )[0];

  const formatDate = (dateString) =>
    new Date(dateString + "T00:00:00").toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="home">
      <Header text="Your Weekly Pay" />
      {lastReceived ? (
        <div className="home__lastReceived">
          <p className="home__lastReceivedLabel">Last Received</p>
          <p className="home__lastReceivedRange">
            {formatDate(lastReceived.weekStart)} -{" "}
            {formatDate(lastReceived.weekEnd)}
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="home__paycheck">
        {records.map((paycheck) => {
          return (
            <Paycheck
              key={paycheck.id}
              paycheck={paycheck}
              records={records}
              setRecords={setRecords}
              setCurrentPage={setCurrentPage}
              setEditingPaycheck={setEditingPaycheck}
            />
          );
        })}
      </div>
      <div className="home__buttons">
        <Button className="home__add" text="Add" onClick={handleNewPaycheck} />
      </div>
    </div>
  );
};

export default Home;
