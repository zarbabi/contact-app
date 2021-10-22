import { useState } from "react";

const AddContact = ({ addContactHandler }) => {
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
  };

  return (
    <form onSubmit={submitForm}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={ChangeHandler}
        />
      </div>
      <div>
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
