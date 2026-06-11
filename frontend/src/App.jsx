import { useState, useRef, useEffect } from "react";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Body from "./components/Body";

import api from "./services/api.js";

const App = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    api.fetchRecords().then((records) => {
      setRecords(records)
    });
  }, []);

  return (
    <>
      <Logo />
      <Header />
      <Body records={records}/>
    </>
  );
};

export default App;
