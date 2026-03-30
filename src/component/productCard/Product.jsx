import React, { Suspense, use } from 'react'
import ProductContainer from './product-container'

const Product = ({ fetchData }) => {
    
    return (
        <>
            <div className="product-heading text-center">
                <h1 className='product-h1'>Premium Digital Tools</h1>
                <p className='product-p'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>


                <div className="product-tab-btn">
                    <button className='slc-btn'>Products</button>

                    <button className='non-slc-btn'>Cart (0)</button>
                </div>
            </div>
            <Suspense fallback={<>Loading</>}>
              <ProductContainer data={fetchData}></ProductContainer>
            </Suspense>


            


        </>
    )
}

export default Product