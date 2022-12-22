import { useContext, useState } from "react";
import { contactDetailsContext } from "../ContactDetailsContext";
const SearchContactDetails = () => {
  const [inputVal, setInputVal] = useState("");
  const { contactDataGlobal, setContactDataLocal } = useContext(
    contactDetailsContext
  );
  const searchHandler = (e) => {
    const textVal = e.target.value;
    setInputVal(textVal);
    let items;
    if (textVal) {
      items = contactDataGlobal.filter(
        (item) =>
          item.fname.toLowerCase().includes(textVal.toLowerCase()) ||
          item.lname.toLowerCase().includes(textVal.toLowerCase()) ||
          item.email.toLowerCase().includes(textVal.toLowerCase())
      );
      setContactDataLocal([...items]);
    } else {
      setContactDataLocal([...contactDataGlobal]);
    }
  };
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="search-input"
        value={inputVal}
        onChange={searchHandler}
      />
    </div>
  );
};
export default SearchContactDetails;
