import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/Contactlist";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Math.random() * 100, ...contact }]);
  };

  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <main className="App">
        <h2>Contact App</h2>
        <AddContact addContactHandler={addContactHandler} />

        <ContactList contacts={contacts} onDelete={deleteContactHandler} />
      </main>
    </div>
  );
}

export default App;
