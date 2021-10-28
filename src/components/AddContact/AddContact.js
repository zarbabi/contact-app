import { useState } from "react";
import addOneContact from "../../services/addContactService";
import "./addContact.css";
const AddContact = ({ history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const ChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory ");
      return;
    }
    e.preventDefault();
    try {
      await addOneContact(contact);
      setContact({ name: "", email: "" });
      history.push("/");
    } catch (error) {}
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
