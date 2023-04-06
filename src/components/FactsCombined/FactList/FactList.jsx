import React from "react";
import "./FactList.css";
import Fact from "../Fact/Fact";

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

const FactList = () => {
  const facts = initialFacts;
  return (
    <section>
      <ul className="facts-all">
        {facts.map((fact) => {
          return <Fact key={fact.id} fact={fact} />;
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