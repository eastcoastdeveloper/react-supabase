function CategoryFilter({ categoriesData, currentCategory }) {
  return (
    <aside>
      <ul>
        <li>
          <button onClick={() => currentCategory("all")} type="button" className="btn btn-all-categories">
            All Categories
          </button>
        </li>
        {categoriesData.map((topic) => (
          <li key={topic.name} className="category">
            <button onClick={() => currentCategory(topic.name)} type="button" className="btn btn-category" style={{ backgroundColor: topic.color }}>
              {topic.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
