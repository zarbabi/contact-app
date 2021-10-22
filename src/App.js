import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact/AddContact";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Math.random() * 100, ...contact }]);
  };

  return (
    <div className="App">
      <main className="App">
        <h2>Contact App</h2>
        <AddContact addContactHandler={addContactHandler} />

        <section>Contact List</section>
      </main>
    </div>
  );
}

export default App;
