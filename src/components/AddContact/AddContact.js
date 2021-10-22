import { useState } from "react";
import "./addContact.css";
const AddContact = ({ addContactHandler, history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const ChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory ");
      return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    history.push("/");
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={ChangeHandler}
        />
      </div>
      <div className="formControl">
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={ChangeHandler}
        />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
