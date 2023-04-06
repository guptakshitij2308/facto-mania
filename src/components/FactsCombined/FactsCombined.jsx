import React from "react";

import FactCategories from "./FactCategories/FactCategories";
import FactList from "./FactList/FactList";

const FactsCombined = () => {
  return (
    <main className="fact-categories">
      <FactCategories />
      <FactList />
    </main>
  );
};

export default FactsCombined;
