import "./index.css";
import NavBar from "./component/NavBar/NavBar";
import Banner from "./component/banner/Banner";
import Status from "./component/banner/status";
import Product from "./component/productCard/Product";
import { useEffect, useState } from "react";
import Pricing from "./component/pricing/Pricing";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartData, setCartData] = useState([]);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/data/card.json");
      const data = await response.json();
      setFetchData(data);
    };

    loadData();
  },[]);

  return (
    <>
      <ToastContainer></ToastContainer>
      <NavBar cartData={cartData} />
      <Banner />
      <Status />
      <Product
        fetchData={fetchData}
        cartData={cartData}
        setCartData={setCartData}
      />

      <Pricing />
    </>
  );
}

export default App;
