import "./styles.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import FactsCombined from "./components/FactsCombined/FactsCombined";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <FactsCombined />
    </div>
  );
}

export default App;
