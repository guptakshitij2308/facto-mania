import React, { useState } from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import supabase from "../../supabase";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";

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
const Fact = ({ fact, setFacts, token }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse
      ? true
      : false;

  async function handleVote(columnName) {
    if (token) {
      setIsUpdating(true);
      const { data: updatedFact, error } = await supabase
        .from("fact")
        .update({ [columnName]: fact[columnName] + 1 })
        .eq("id", fact.id)
        .select();

      setIsUpdating(false);
      if (!error)
        setFacts((facts) =>
          facts.map((f) => (f.id === fact.id ? updatedFact[0] : f))
        );
    } else alert("You need to log in to vote on facts");
  }

  return (
    <li className="fact">
      <p>
        {isDisputed ? (
          <span className="disputed">
            [<DoNotDisturbIcon className="disputed-icon" /> Disputed]
          </span>
        ) : null}
        {fact.text}
        <a className="source-link" href={fact.source} target="_blank">
          <span>(Source)</span>
        </a>
      </p>
      <span
        className="category"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="react-buttons">
        <button
          onClick={() => handleVote("votesInteresting")}
          disabled={isUpdating}
        >
          <ThumbUpAltIcon />
          {fact.votesInteresting}
        </button>
        <button
          onClick={() => handleVote("votesMindblowing")}
          disabled={isUpdating}
        >
          <LocalFireDepartmentIcon />
          {fact.votesMindblowing}
        </button>
        <button onClick={() => handleVote("votesFalse")} disabled={isUpdating}>
          <DangerousIcon />
          {fact.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;
