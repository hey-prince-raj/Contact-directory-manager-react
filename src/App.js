import { useState } from "react";
import { contactDetailsContext } from "./ContactDetailsContext";
import InputContact from "./Componenets/InputContact";
import ShowContactDetails from "./Componenets/ShowContactDetails";
import SearchContactDetails from "./Componenets/SearchContactDetails";
import "./styles.css";

const { Provider } = contactDetailsContext;

export default function App() {
  const [contactDataGlobal, setContactDataGlobal] = useState([]);
  const [contactDataLocal, setContactDataLocal] = useState([]);
  return (
    <>
      <Provider
        value={{
          contactDataGlobal,
          setContactDataGlobal,
          contactDataLocal,
          setContactDataLocal
        }}
      >
        <SearchContactDetails />
        <InputContact />
        <ShowContactDetails />
      </Provider>
    </>
  );
}
