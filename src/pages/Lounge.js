import React, { useState } from 'react'
import Menu from "./Menu";
import Categories from "./Categories";
import logo from "./logo.png";
import items from "./dataLounge";
import Footer from './Footer';
import { Link } from 'react-router-dom';
const allCategories = ["todos", ...new Set(items.map((item) => item.category))];



function Lounge() {
    
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  // eslint-disable-next-line
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "todos") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
    return (
        <div>
            <main>
        <section className="menu section">
          <div className="title">
          <Link to={"/"}>
            <img src={logo} alt="logo" href="/Restaurante" className="logo" />
            </Link>
            <h2>Lounge Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems} />
          <Menu items={menuItems} />


        </section>
      </main>
      <Footer></Footer>

        </div>
        
    )
}

export default Lounge
