import "./App.css";
import AddContact from "./components/AddContact/AddContact";

function App() {
  return (
    <div className="App">
      <main className="App">
        <h2>Contact App</h2>
        <AddContact />

        <section>Contact List</section>
      </main>
    </div>
  );
}

export default App;
