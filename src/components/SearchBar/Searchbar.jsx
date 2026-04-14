import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from "./Searchbar.module.css"

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState(""); 

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === "") {
      toast.error("Arama terimi boş olamaz! Lütfen bir şeyler yazın.");
      return;
    }

    onSubmit(inputValue);
    
    
    setInputValue(""); 
  };

  return (
    <header className={css.SearchBar}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.SearchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className={css.SearchButton}
          type="submit">Search</button>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;