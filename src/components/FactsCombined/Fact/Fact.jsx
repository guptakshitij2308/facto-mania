import React from "react";
// import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DangerousIcon from "@mui/icons-material/Dangerous";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

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
const Fact = ({ fact }) => {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="source-link" href={fact.source} target="_blank">
          ( Source )
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
        <button>
          <ThumbUpAltIcon />
          {fact.votesInteresting}
        </button>
        <button>
          <LocalFireDepartmentIcon />
          {fact.votesMindblowing}
        </button>
        <button>
          <DangerousIcon />
          {fact.votesFalse}
        </button>
      </div>
    </li>
  );
};

export default Fact;
