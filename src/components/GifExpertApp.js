import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);
  return (
    <div>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ul>
        {categories.map((el) => (
          <GifGrid key={el} category={el} />
        ))}
      </ul>
    </div>
  );
};

export default GifExpertApp;
