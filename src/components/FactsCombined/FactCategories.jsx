import React from "react";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const FactCategories = ({ setCurrentCategory }) => {
  return (
    <aside>
      <ul>
        <li>
          <button
            onClick={() => setCurrentCategory("all")}
            className="btn btn-all"
          >
            All
          </button>
        </li>

        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <button
              onClick={() => setCurrentCategory(cat.name)}
              style={{ backgroundColor: cat.color }}
              className="btn btn-fact-type"
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FactCategories;
