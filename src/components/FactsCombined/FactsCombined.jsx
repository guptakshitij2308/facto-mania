import React, { useState } from "react";

import FactCategories from "./FactCategories/FactCategories";
import FactList from "./FactList/FactList";
import Loading from "../Loading";

const FactsCombined = ({ facts, isLoading, setCurrentCategory, setFacts }) => {
  return (
    <main className="fact-categories">
      <FactCategories setCurrentCategory={setCurrentCategory} />
      {/* <FactList facts={facts} /> */}
      {isLoading ? <Loading /> : <FactList facts={facts} setFacts={setFacts} />}
    </main>
  );
};

export default FactsCombined;
