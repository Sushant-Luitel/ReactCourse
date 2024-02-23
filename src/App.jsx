import "./App.css";
import List from "./Components/List";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";
function App() {
  return (
    <div className="App">
      <Header />
      <AddItem />
      <List />
      <Footer />
    </div>
  );
}

export default App;
