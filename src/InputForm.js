import { useState } from "react";
import "./InputForm.css";
import supabase from "./supabase";

function InputForm({ categoriesData, setFactState, resetForm }) {
  const CATEGORIES = categoriesData;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setUploading] = useState(false);

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  async function submitHandler(e) {
    e.preventDefault();
    if (text && isValidHttpUrl(source) && category && text.length <= 400) {
      setUploading(true);
      const { data: newFact, error } = await supabase.from("facts").insert([{ title, text, source, category }]).select();

      if (!error) setFactState((facts) => [newFact[0], ...facts]);

      setText("");
      setCategory("");
      setSource("");
      resetForm(false);
      setUploading(false);
    }
  }

  return (
    <div className="input-form">
      <form className="fact-form" onSubmit={submitHandler}>
        <div>
          <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
          <input
            disabled={isUploading}
            type="text"
            placeholder="share a fact "
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <span>{400 - text.length}</span>
        </div>
        <div>
          <input type="text" placeholder="trustworthy source" value={source} onChange={(e) => setSource(e.target.value)} />
          <select disabled={isUploading} onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="">Choose Category</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.name} value={cat.name}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button disabled={isUploading} className="btn btn-large">
          Post
        </button>
      </form>
    </div>
  );
}

export default InputForm;
