import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  
  const [theme, setTheme] = useState(true)
  const appClass = theme ? "App dark" : "App light"
  
  function changeClassState() {
    setTheme(light => !light)
}
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeClassState}>{theme ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
