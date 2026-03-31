import { useState } from 'react'
import ProductContainer from './product-container'
import Cart from './Cart';

const Product = ({ fetchData,cartData,setCartData}) => {
    const [selected,setSelected] = useState('product');

    const renderContainer = (tab) =>{
        setSelected(tab);
    }
    
    return (
        <>
            <div className="product-heading text-center">
                <h1 className='product-h1'>Premium Digital Tools</h1>
                <p className='product-p'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>


                <div className="product-tab-btn ">
                    <button className={selected === 'product' ? "slc-btn":"non-slc-btn"} onClick={() => renderContainer('product')}>Products</button>

                    <button className={selected === 'cart' ? "slc-btn":"non-slc-btn"}  onClick={() => renderContainer('cart')}>Cart ({cartData.length})</button>
                </div>
            </div>
            {selected === 'product'?
              <ProductContainer cartData={cartData} setCartData={setCartData} data={fetchData}></ProductContainer>
            :<Cart cartData = {cartData} setCartData={setCartData}/>}


            


        </>
    )
}

export default Product