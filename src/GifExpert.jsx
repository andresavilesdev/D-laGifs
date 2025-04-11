import { useState, useRef } from "react";
import { AddCategory, GifGrid } from "./components";
import GlitchText from "./components/bits/GlitchText";

export const GifExpert = () => {
  const gifGridRef = useRef();

  const [categories, setCategories] = useState([]);

  // Add category handler
  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;

    setCategories([NewCategory, ...categories]);
  };

    const handleScroll = () => {
    gifGridRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="title">
        <GlitchText
          speed={3}
          enableShadows={true}
          enableOnHover={false}
          className='custom-class'
        > 
          Welcome to AvilesGifs
        </GlitchText>
      </div>

      <AddCategory onNewCategory={ onAddCategory } onScroll={ handleScroll } />
        
      {categories.map(( category ) => (
        <GifGrid 
          key={ category } 
          category={ category }
          innerRef={gifGridRef} />
      ))}
    </>
  );
};
