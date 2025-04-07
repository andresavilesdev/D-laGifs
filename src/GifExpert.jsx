import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpert = () => {
  const [categories, setCategories] = useState([]);

  // Add category handler
  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;

    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ ( value ) => onAddCategory( value )} />
        
      {categories.map(( category ) => (
        <GifGrid 
          key={ category } 
          category={ category } />
      ))}
    </>
  );
};
