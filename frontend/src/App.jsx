import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Home from "./components/homepage/Home";
import api from "./services/api.js";
import Form from "./components/formpage/Form.jsx";

const App = () => {
  const [records, setRecords] = useState([]);
  const [currentPage, setCurrentPage] = useState("homepage");
  const [editingPaycheck, setEditingPaycheck] = useState(null);

  const fetchRecords = () => {
    api.fetchRecords().then((records) => {
      setRecords(records);
    });
  };

  const renderPage = () => {
    if (currentPage == "homepage") {
      return (
        <Home
          records={records}
          setRecords={setRecords}
          setCurrentPage={setCurrentPage}
          setEditingPaycheck={setEditingPaycheck}
        />
      );
    } else if (currentPage == "formpage") {
      return (
        <Form
          setCurrentPage={setCurrentPage}
          setRecords={setRecords}
          editingPaycheck={editingPaycheck}
          setEditingPaycheck={setEditingPaycheck}
        />
      );
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="app">
      <Logo currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
