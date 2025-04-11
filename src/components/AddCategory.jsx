import { useState } from "react";
import ShinyText from "./bits/ShinyText";
import { Input } from "@heroui/input";
export const AddCategory = ({ onNewCategory, onScroll }) => {

  // HOOKS ----
  const [inputValue, setInputValue] = useState("");

  // EVENTS ----
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onScroll(); // Scroll to the top of the page
    

    // Add the new category to the list
    if (inputValue.trim().length <= 1) {
      alert("Please enter a category");
      return;
    }
    onNewCategory(inputValue.trim());
    setInputValue("");
    
  };

  // RENDERING ----
  return (
    <form onSubmit={onSubmit}>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input
        type="text"
        id="search"
        placeholder="Search a gif"
        value={inputValue}
        onChange={onInputChange}
      />
      </div>
      
      <button>
        <ShinyText text="Search" disabled={false} speed={2} className='custom-class' />

      </button>
    </form>
  );
};
