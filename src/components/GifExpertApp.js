import { useState } from "react";
import AddCategory from "./AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);
  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
};

export default GifExpertApp;
