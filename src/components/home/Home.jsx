// import { Link } from "react-router-dom";
import CategorySlider from "./CategorySlider";
import NewArrivalsSection from "./NewArrivalsSection";
import "../../styles/Home.css";

function Home() {
  const products = [
    { id: 1, name: "Vintage Vase", price: "$30" },
    { id: 2, name: "Wooden Table", price: "$120" },
  ];

  return (
    <div className="home">
      <CategorySlider />
      <NewArrivalsSection />
     
    </div>
  );
}
export default Home;