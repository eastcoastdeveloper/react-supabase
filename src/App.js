import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./App.css";
import InputForm from "./InputForm";
import Header from "./Header";
import FactList from "./FactList";
import Loader from "./Loader";
import Error from "./Error";
import CategoryFilter from "./CategoryFilter";

const CATEGORIES = [
  { name: "adventure", color: "#1E90FF" },
  { name: "mystery", color: "#6495ED" },
  { name: "documentary", color: "#7B68EE" },
  { name: "comedy", color: "#4169E1" },
  { name: "romance", color: "#0000FF" },
  { name: "historical", color: "#0000CD" },
];

function App() {
  const [showForm, setFormState] = useState(false);
  const [factList, setFacts] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [hasError, setError] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setLoader(true);

        let query = supabase.from("facts").select("*");
        if (currentCategory !== "all") {
          query = query.eq("category", currentCategory).order("votesinteresting", { ascending: false });
        }

        const { data: facts, error } = await query;
        if (!error) {
          setFacts(facts);
        } else {
          setError(true);
        }
        setLoader(false);
      }
      getFacts();
    },
    [currentCategory]
  );

  return (
    <div className="wrapper">
      {showForm ? <InputForm className="fact-form" categoriesData={CATEGORIES} setFactState={setFacts} resetForm={setFormState} /> : null}
      <Header showForm={showForm} setFormState={setFormState} />
      <main>
        <CategoryFilter categoriesData={CATEGORIES} currentCategory={setCurrentCategory} />
        {isLoading ? <Loader /> : hasError ? <Error /> : <FactList categoriesData={CATEGORIES} facts={factList} setFactState={setFacts} />}
      </main>
    </div>
  );
}

export default App;
