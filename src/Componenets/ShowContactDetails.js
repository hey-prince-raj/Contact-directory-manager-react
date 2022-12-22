import React, { useContext } from "react";
import { contactDetailsContext } from "../ContactDetailsContext";
const IMAGE_URL =
  "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg";
const ShowContactDetails = () => {
  const {
    contactDataGlobal,
    setContactDataGlobal,
    contactDataLocal,
    setContactDataLocal
  } = useContext(contactDetailsContext);
  const deleteHandler = (e) => {
    const id = e.target.parentElement.getAttribute("data-id");
    const items = contactDataGlobal.filter((item) => item.id !== id);
    setContactDataGlobal([...items]);
    setContactDataLocal([...items]);
  };
  return (
    <>
      <div className="wrapper">
        {contactDataLocal.map((item) => {
          return (
            <div
              className="user-container"
              key={item.id}
              data-m="dd"
              data-id={item.id}
            >
              <div>
                <img src={IMAGE_URL} alt="" className="user-image" />
              </div>
              <div>
                {item.fname} {item.lname}
              </div>
              <div>{item.email}</div>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default React.memo(ShowContactDetails);
