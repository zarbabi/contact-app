import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import { useEffect, useState } from "react";
import getContacts from "../../services/getContactsService";
import deleteOneContact from "../../services/deleteContactService";
const ContactList = (props) => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContact(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                onDelete={deleteContactHandler}
                key={contact.id}
              />
            );
          })
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
