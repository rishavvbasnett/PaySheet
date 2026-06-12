import Paycheck from "./paycheck-card/Paycheck.jsx";
import Button from "../Button.jsx";
import Header from "../Header.jsx";

const Home = (props) => {
  const records = props.records;
  const setCurrentPage = props.setCurrentPage;

  const handleNewPaycheck = () => {
    setCurrentPage("formpage");
  };

  return (
    <div className="home">
      <Header text="Your Weekly Pay" />
      <div className="home__paycheck">
        {records.map((paycheck) => (
          <Paycheck paycheck={paycheck} />
        ))}
      </div>
      <div className="home__buttons">
        <Button className="home__add" text="Add" onClick={handleNewPaycheck} />
        <Button className="home__reload" text="Reload" />
      </div>
    </div>
  );
};

export default Home;
