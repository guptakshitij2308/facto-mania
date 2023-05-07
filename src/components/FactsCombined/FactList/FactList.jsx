import React, { useState } from "react";
import "./FactList.css";
import Fact from "../Fact/Fact";

const FactList = ({ facts, setFacts, token }) => {
  // const [facts, setFacts] = useState(initialFacts);
  return (
    <section>
      <ul className="facts-all">
        {facts.map((fact) => {
          return (
            <Fact key={fact.id} fact={fact} setFacts={setFacts} token={token} />
          );
        })}
      </ul>
      <p>
        This category has {facts.length} entries in the database! Include your
        own.
      </p>
    </section>
  );
};

export default FactList;

<li class="fact"></li>;
