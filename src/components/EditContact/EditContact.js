import { useEffect, useState } from "react";
import getContacts from "../../services/getContactsService";
import getOneContact from "../../services/getOneContact";
import updateContact from "../../services/updateContact";

const EditContact = ({ history, match }) => {
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
      await updateContact(match.params.id, contact);
      await getContacts();
      history.push("/");
    } catch (error) {}
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContact(match.params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);

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
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default EditContact;
