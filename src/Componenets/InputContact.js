import React, { useContext, useState } from "react";
import { contactDetailsContext } from "../ContactDetailsContext";

const InputContact = () => {
  const {
    contactDataGlobal,
    setContactDataGlobal,
    setContactDataLocal
  } = useContext(contactDetailsContext);
  const [formValue, setFormValue] = useState({
    fname: "",
    lname: "",
    email: ""
  });
  const { fname, lname, email } = formValue;
  const [error, setError] = useState(false);
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    setFormValue({
      ...formValue,
      [name]: value
    });
  };
  const uniqueIdgenerator = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!(fname.length && lname.length && email.length)) {
      setError(true);
      return false;
    }
    const uniqueId = uniqueIdgenerator();
    const dataValue = { id: uniqueId, ...formValue };
    const valArray = [...contactDataGlobal, dataValue];
    setContactDataGlobal(valArray);
    setContactDataLocal(valArray);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-input-rapper">
          <label className="form-label">First Name</label>
          <input
            type="text"
            value={fname}
            onChange={changeHandler}
            name="fname"
            className="form-input"
          />
          {error && !fname.length ? (
            <span className="form-error">First Name can't be be empty</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-input-rapper">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            value={lname}
            onChange={changeHandler}
            name="lname"
            className="form-input"
          />
          {error && !lname.length ? (
            <span className="form-error">Last Name can't be be empty</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-input-rapper">
          <label className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={changeHandler}
            name="email"
            className="form-input"
          />
          {error && !email.length ? (
            <span className="form-error">Email can't be be empty</span>
          ) : (
            ""
          )}
        </div>
        <div className="form-input-rapper">
          <input type="submit" value="create" />
        </div>
      </form>
    </>
  );
};
export default React.memo(InputContact);
