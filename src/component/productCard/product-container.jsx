import { CheckIcon } from "lucide-react";
import { use } from "react";

const ProductContainer = ({ data ,cartData ,setCartData}) => {
   
  let products = data;
  console.log(products);
  const addToCart = (productInfo)=>{
    setCartData([...cartData,productInfo]);
  }
  return (
    <div className="container-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 mt-10">
      {products.map((product) => {
        return (
        
            
              <div key={product.id} className="relative bg-white rounded-2xl shadow-lg p-6 w-[350px] sm:w-[300px] lg:w-[320px] mx-auto xl:w-[360px]">
                {/* Best Seller Badge */}
                <span className={`product-badge ${product.tagColor}`}>
                  {product.tag}
                </span>

                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <img src={product.img}></img>
                </div>

                <h2 className="product-h">
                  {product.title}
                </h2>

                <p className="product-des">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-1 mb-5">
                  <span className="product-price">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">/Mo</span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckIcon className="text-green-600"/>
                      {feature}
                    </li>
                  ))}
                </ul>

                
                <button className="product-btn" onClick={() => addToCart(data)}>
                  Buy Now
                </button> 
              </div> 
            
         
        );
      })}
    </div>
  );
};

export default ProductContainer;
