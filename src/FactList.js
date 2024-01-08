import Fact from "./Fact";

function FactList({ categoriesData, facts, setFactState }) {
  return (
    <section>
      <ul className="fact-list">
        {facts.map((fact) => (
          <Fact key={fact.id} factObj={fact} categoriesData={categoriesData} setFactState={setFactState} />
        ))}
      </ul>
    </section>
  );
}

export default FactList;
