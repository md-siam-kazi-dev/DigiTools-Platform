import { CheckIcon } from "lucide-react";
import { useState } from "react";

const ProductCard = ({product,addToCart}) => {
   const [loadBtn, setLoadBtn] = useState('');

   const btnFun = () =>{
    const btnText = addToCart(product);
     setLoadBtn(btnText);
     setTimeout(() => {
        setLoadBtn('');
     },3000)
   }

  return (
    <div key={product.id} className="product-card-div">
                {/* Best Seller Badge */}
                <span className={`product-badge ${product.tagColor}`}>
                  {product.tag}
                </span>

                <div>
                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4">
                  <img src={product.img}></img>
                </div>

                <h2 className="product-h">
                  {product.title}
                </h2>

                <p className="product-des">
                  {product.description}
                </p>
                </div>


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

                
                <button className={`product-btn ${loadBtn != ''?"bg-amber-500":""}`} onClick={() => btnFun()}>
                  {loadBtn === ''?"Buy Now":(<div className="flex justify-center"> <CheckIcon /> {loadBtn} </div>)}
                </button> 
              </div> 
  )
}

export default ProductCard