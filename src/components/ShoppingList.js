import React from "react";
import Item from "./Item";
import { useState } from 'react'

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")
  
  function filterCategory(e) {
    setCategory((selectedCategory) => e.target.value)
  }

  const filteredCategory = items.filter(item => {
    // return item.category.includes(selectedCategory)
    if(item.category === selectedCategory) {
      return item
    }
    else if(selectedCategory === "All"){
      return item
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
