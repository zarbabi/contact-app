import { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const ChangeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addContactHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={addContactHandler}>
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
      <button type="submit">Save</button>
    </form>
  );
};

export default AddContact;
