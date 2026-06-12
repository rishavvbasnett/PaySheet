import { useState, useRef, useEffect } from "react";
import Logo from "./components/Logo";
import Home from "./components/homepage/Home";
import api from "./services/api.js";
import Form from "./components/formpage/Form.jsx";

const App = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState("homepage");

  const fetchRecords = () => {
    api.fetchRecords().then((records) => {
      setRecords(records);
    });
  };

  const renderPage = () => {
    if (currentPage == "homepage") {
      return <Home records={records} setCurrentPage={setCurrentPage} />;
    } else if (currentPage == "formpage") {
      return <Form />;
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="app">
      <Logo />
      {renderPage()}
    </div>
  );
};

export default App;
