import React, { useState } from "react";
import CategorySlider from "./CategorySlider";
import NewArrivalsSection from "./NewArrivalsSection";
import ProductList from "./ProductList"; 
import "../../styles/Home.css";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Table Lamps");

  return (
    <div className="home">
      <CategorySlider
        onCategorySelect={setSelectedCategory} />
      <NewArrivalsSection />
      <ProductList category={selectedCategory} />

    </div>
  );
}
export default Home;