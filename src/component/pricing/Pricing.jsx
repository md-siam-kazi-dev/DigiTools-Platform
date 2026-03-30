import NonPop from "./NonPop";
import Pop from "./Pop";
import { pricingData } from "./pricing-data";



const Pricing = () => {
  return (
    <div className="container-div mt-20">
        <h1 className="product-h1 text-center">Simple, Transparent Pricing</h1>
        <p className="product-p text-center mb-10">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className="pricing-container grid grid-cols-1 gap-5 lg:gap-2 lg:grid-cols-3">
            {pricingData.map(data => {
                return (
                   !data.popular?<NonPop key={data.id} data={data} />:<Pop key={data.id} data={data} />
                )
            })}
        </div>
    </div>
  )
}

export default Pricing;