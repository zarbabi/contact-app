import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/Contactlist";
import { Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import getContacts from "./services/getContactsService";
import deleteOneContact from "./services/deleteContactService";
import addOneContact from "./services/addContactService";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      setContacts([...contacts, { id: new Date().getTime(), ...contact }]);
      await addOneContact(contact);
    } catch (error) {}
  };

  const deleteContactHandler = async (id) => {
    try {
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
      await deleteOneContact(id);
    } catch (error) {}
  };

  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    // if (savedContacts) setContacts(savedContacts);
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className="App">
      <main className="App">
        <h2>Contact App</h2>
        <Switch>
          <Route path="/user/:id" component={ContactDetail} />
          <Route
            path="/add"
            render={(props) => (
              <AddContact addContactHandler={addContactHandler} {...props} />
            )}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                contacts={contacts}
                onDelete={deleteContactHandler}
                {...props}
              />
            )}
          />
        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
      </main>
    </div>
  );
}

export default App;
