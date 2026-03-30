import "./index.css";
import NavBar from "./component/NavBar/NavBar";
import Banner from "./component/banner/Banner";
import Status from "./component/banner/status";
import Product from "./component/productCard/Product";
import { useEffect } from "react";
import Pricing from "./component/pricing/Pricing";

function App() {
  
  const fetchData = fetch('/data/card.json').then(res=>res.json());
  
  return (
    <>
      <NavBar />
      <Banner />
      <Status />
      <Product fetchData={fetchData}/>


      <Pricing />
    </>
  );
}

export default App;
