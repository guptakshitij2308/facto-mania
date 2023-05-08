import React, { useState } from "react";
import supabase from "../../supabase";

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

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

const Form = ({ setFacts, setShowForm }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("");
  const textLength = text.length;
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(text, source, category);

    if (text && isValidHttpUrl(source) && category && textLength <= 200) {
      // const newFact = {
      //   id: Math.round(Math.random() * 10000000),
      //   text,
      //   source,
      //   category,
      //   votesIntresting: 0,
      //   votesMindBlowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear,
      // };
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("fact")
        .insert([{ text, source, category }])
        .select();

      if (!error) setFacts((facts) => [newFact[0], ...facts]);

      setText("");
      setSource("");
      setCategory("");

      // setShowForm(false);
      setIsUploading(false);
    }
  }

  return (
    <form className="form-facts" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Inform us of a fact"
        value={text}
        onChange={(event) => setText(event.target.value)}
        disabled={isUploading}
      />
      <span className="char-left">{200 - textLength}</span>
      <input
        type="text"
        placeholder="Information's Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select
        className=""
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((cat) => {
          return (
            <option key={cat.name} value={cat.name}>
              {cat.name.toUpperCase()}
            </option>
          );
        })}
        {/* <option value="tech">Tech</option>
        <option value="" science>
          Science
        </option>
        <option value="finance">Finance</option> */}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
};

export default Form;
