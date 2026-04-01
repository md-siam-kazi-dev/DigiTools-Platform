import { CheckIcon } from "lucide-react";

import { toast } from "react-toastify";
import ProductCard from "./ProductCard";

const ProductContainer = ({ data ,cartData ,setCartData}) => {
 
   
  let products = data;
  
//   add to cart  implention 
  const addToCart = (productInfo)=>{

    const productExist = cartData.some(cartItem => cartItem.id === productInfo.id);
    if(productExist){
        toast("Already product added to cart")
        return "Already Added";
    }else{
        setCartData([...cartData,productInfo]);
    toast(`${productInfo.title} Added To Cart`)
        
         return "Added To Cart";
    }
    


  }
  return (
    <div className="container-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mt-10">
      {products.map((product) => {
        return (
        
            
              <ProductCard key={product.id} product={product} addToCart={addToCart}/>
            
         
        );
      })}
    </div>
  );
};

export default ProductContainer;
