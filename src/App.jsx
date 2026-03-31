import "./index.css";
import NavBar from "./component/NavBar/NavBar";
import Banner from "./component/banner/Banner";
import Status from "./component/banner/status";
import Product from "./component/productCard/Product";
import { useEffect, useState } from "react";
import Pricing from "./component/pricing/Pricing";

function App() {
  const [cartData, setCartData] = useState([]);
  const [fetchData,setFetchData] = useState([]);



  const loadData = async()=>{
    const response = await fetch('/data/card.json');
    const data = await response.json();
    setFetchData(data);
  }

//  fetch data and set it to fetchData 
  loadData();


  return (
    <>
      <NavBar cartData={cartData} />
      <Banner />
      <Status />
      <Product
         fetchData={fetchData}
         cartData={cartData}
         setCartData = {setCartData}
      />

      <Pricing />
    </>
  );
}

export default App;
