import React, { useState } from "react";

import FactCategories from "./FactCategories/FactCategories";
import FactList from "./FactList/FactList";
import Loading from "../Loading";

const FactsCombined = ({ facts, isLoading }) => {
  return (
    <main className="fact-categories">
      <FactCategories />
      {/* <FactList facts={facts} /> */}
      {isLoading ? <Loading /> : <FactList facts={facts} />}
    </main>
  );
};

export default FactsCombined;
