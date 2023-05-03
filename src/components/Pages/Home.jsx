import React from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import FactsCombined from "../FactsCombined/FactsCombined";
import supabase from "../../supabase.js";
import PageFooter from "../Footer/PageFooter";
import { useState, useEffect } from "react";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);

        let query = supabase.from("fact").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        const { data: fact, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(1000);

        if (!error) setFacts(fact);
        else alert("There was some problem in fetching the facts");
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <Form setFacts={setFacts} setShowForm={setShowForm} /> : null}

      <FactsCombined
        isLoading={isLoading}
        facts={facts}
        setCurrentCategory={setCurrentCategory}
        setFacts={setFacts}
      />
    </>
  );
};

export default Home;
