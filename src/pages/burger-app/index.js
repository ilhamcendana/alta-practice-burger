import { useState } from "react";
import Burger from "../../components/burger";
import PickIngredients from "../../components/pick-ingredients";
import Summary from "../../components/summary";
import { Link } from "react-router-dom";

export default function BurgerApp() {
  const list_ingredients = [
    {
      label: "Lettuce",
      type: "lettuce",
      price: 2500,
    },
    {
      label: "Cheese",
      type: "cheese",
      price: 5000,
    },
    {
      label: "Meat",
      type: "meat",
      price: 16000,
    },
    {
      label: "Tomato",
      type: "tomato",
      price: 3000,
    },
  ];

  const [selectedIngredients, selectedIngredientsSet] = useState([]);
  const [priceList, priceListSet] = useState([]);

  function handleClickIngredient(ingredient) {
    selectedIngredientsSet((prev) => [ingredient, ...prev]);

    const findSameIndex = [...priceList].findIndex(
      (i) => i?.type === ingredient?.type
    );

    if (findSameIndex === -1) {
      priceListSet((prev) => [
        ...prev,
        {
          ...ingredient,
          qty: 1,
        },
      ]);
    } else {
      priceListSet((prev) => {
        let sample = [...prev];
        sample[findSameIndex].qty += 1;
        return sample;
      });
    }
  }
  return (
    <>
      <nav className="d-flex gap-4 container py-3">
        <Link to="/">Burger App</Link>
        <Link to="/we-are-hiring">We are hiring</Link>
      </nav>

      <div className="container">
        <Burger selectedIngredients={selectedIngredients} />
        <div className="row mt-4">
          <PickIngredients
            onClickIngredient={handleClickIngredient}
            list_ingredients={list_ingredients}
            className="col-6"
          />
          <Summary priceList={priceList} className="col-6" />
        </div>
      </div>
    </>
  );
}
