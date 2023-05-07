import React, { useState } from "react";

import FactCategories from "./FactCategories";
import FactList from "./FactList";
import Loading from "../Loading";

const FactsCombined = ({
  facts,
  isLoading,
  setCurrentCategory,
  setFacts,
  token,
}) => {
  return (
    <main className="fact-categories">
      <FactCategories setCurrentCategory={setCurrentCategory} />
      {/* <FactList facts={facts} /> */}
      {isLoading ? (
        <Loading />
      ) : (
        <FactList facts={facts} setFacts={setFacts} token={token} />
      )}
    </main>
  );
};

export default FactsCombined;
