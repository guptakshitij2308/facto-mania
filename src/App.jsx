import { useState, useEffect } from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import FactsCombined from "./components/FactsCombined/FactsCombined";
import supabase from "./supabase";

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(function () {
    async function getFacts() {
      const { data: fact, error } = await supabase.from("fact").select("*");
      setFacts(fact);
    }
    getFacts();
  }, []);

  return (
    <div className="App">
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <Form setFacts={setFacts} setShowForm={setShowForm} /> : null}

      <FactsCombined facts={facts} />
    </div>
  );
}

export default App;
