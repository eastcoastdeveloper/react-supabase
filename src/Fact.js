import { useState } from "react";
import "./Fact.css";
import supabase from "./supabase";

function Fact({ factObj, categoriesData, setFactState }) {
  const [isUpdating, setUpdating] = useState(false);

  async function handleVote(columnName) {
    setUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: factObj[columnName] + 1 })
      .eq("id", factObj.id)
      .select();
    setUpdating(false);

    if (!error) {
      setFactState((facts) => facts.map((f) => (f.id === factObj.id ? updatedFact[0] : f)));
    }
  }
  return (
    <li className="fact">
      <h3>{factObj.title}</h3>
      <p>{factObj.text}</p>
      <a href={factObj.source} className="source" target="_blank" rel="noopener noreferrer">
        source
      </a>
      <div className="category">
        <span style={{ backgroundColor: categoriesData.find((category) => category.name === factObj.category).color }} className="tag">
          {factObj.category}
        </span>
        <div className="vote-buttons">
          <span onClick={() => handleVote("votesinteresting")} disabled={isUpdating}>
            &#128077;{" "}
          </span>
          <button type="button" disabled={isUpdating}>
            {factObj.votesinteresting}
          </button>

          <span onClick={() => handleVote("votesmindblowing")}>&#129327;</span>
          <button type="button">{factObj.votesmindblowing}</button>

          <span onClick={() => handleVote("votesfalse")}>&#128078;</span>
          <button type="button">{factObj.votesfalse}</button>
        </div>
      </div>
    </li>
  );
}

export default Fact;
