import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const allCategories = ["all", ...tempSet];
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const filterItems = (category) => {
    if (category == "all") {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories allCategories={allCategories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
