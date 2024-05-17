const Categories = ({ allCategories, filterItems }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => {
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Categories;
