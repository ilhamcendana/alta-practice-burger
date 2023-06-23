import "./Burger.css";
import Ingredient from "./ingredient";

export default function Burger({ selectedIngredients = [] }) {
  return (
    <div className="burger">
      <div className="bread-top">
        <div className="seeds" />
        <div className="seeds" />
      </div>
      {selectedIngredients.map((item,index) => (
        <Ingredient type={item?.type} key={index} />
      ))}
      <div className="bread-bottom" />
    </div>
  );
}
