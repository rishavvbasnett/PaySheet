import Paycheck from "./paycheck-card/Paycheck.jsx";
import Button from "../Button.jsx";
import Header from "../Header.jsx";

const Home = (props) => {
  const records = props.records;
  const setRecords = props.setRecords;

  const setCurrentPage = props.setCurrentPage;

  const handleNewPaycheck = () => {
    setCurrentPage("formpage");
  };

  return (
    <div className="home">
      <Header text="Your Weekly Pay" />
      <div className="home__paycheck">
        {records.map((paycheck) => {
          console.log(records);
          return (
            <Paycheck
              key={paycheck.id}
              paycheck={paycheck}
              records={records}
              setRecords={setRecords}
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
