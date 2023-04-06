import React, { useState } from "react";

import FactCategories from "./FactCategories/FactCategories";
import FactList from "./FactList/FactList";

const FactsCombined = ({ facts }) => {
  return (
    <main className="fact-categories">
      <FactCategories />
      <FactList facts={facts} />
    </main>
  );
};

export default FactsCombined;
