import { useState } from "react";
export const AddCategory = ({ onNewCategory }) => {
  // HOOKS ----
  const [inputValue, setInputValue] = useState("");

  // EVENTS ----
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

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
      <input
        type="text"
        id="search"
        placeholder="Search a gif"
        value={inputValue}
        onChange={onInputChange}
      />
      <button>Search</button>
    </form>
  );
};
