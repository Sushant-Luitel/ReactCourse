import "./App.css";
import List from "./Components/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";
import { useState } from "react";
function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header />
      <main>
        <AddItem tasks={tasks} setTasks={setTasks} />
        <List tasks={tasks} setTasks={setTasks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
