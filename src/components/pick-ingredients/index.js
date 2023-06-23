export default function PickIngredients({
  className,
  list_ingredients,
  onClickIngredient,
}) {
  return (
    <div className={className}>
      <h3>Pick your ingredients</h3>

      {/* Ingredients Button Control */}
      <div
        className="d-flex flex-column gap-2 mt-4 mx-auto"
        style={{ maxWidth: "50%" }}
      >
        {list_ingredients.map((item, i) => (
          <button
            key={i}
            onClick={() => onClickIngredient(item)}
            className="btn btn-warning"
          >
            {item?.label}
          </button>
        ))}
      </div>
    </div>
  );
}
