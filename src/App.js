import "./App.css";
import AddContact from "./components/AddContact/AddContact";
import ContactList from "./components/ContactList/Contactlist";
import { Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/EditContact/EditContact";

function App() {
  return (
    <div className="App">
      <main className="App">
        <h2>Contact App</h2>
        <Switch>
          <Route path="/edit/:id" component={EditContact} />
          <Route path="/user/:id" component={ContactDetail} />
          <Route path="/add" component={AddContact} />
          <Route path="/" exact component={ContactList} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
