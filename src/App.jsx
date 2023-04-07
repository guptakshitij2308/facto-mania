import { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import FactsCombined from "./components/FactsCombined/FactsCombined";
import supabase from "./supabase";

// import Loading from "./components/Loading";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);
      const { data: fact, error } = await supabase.from("fact").select("*");
      setFacts(fact);
      setIsLoading(false);
    }
    getFacts();
  }, []);

  return (
    <div className="App">
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <Form setFacts={setFacts} setShowForm={setShowForm} /> : null}

      {isLoading ? (
        <FactsCombined isLoading={isLoading} facts={facts} />
      ) : (
        <FactsCombined isLoading={isLoading} facts={facts} />
      )}
      {/* <FactsCombined facts={facts} /> */}
    </div>
  );
}

export default App;
