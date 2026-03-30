import { CheckIcon } from "lucide-react"

const Pop = ({data}) => {
  return (
     <div className="lin-col relative shadow-xl border-gray-300 rounded-2xl p-7  flex flex-col justify-between w-[350px]  mx-auto lg:w-[320px] xl:w-[360px]">
       <span className="text-[#BB4D00] bg-[#FEF3C6] absolute top-0 transform rounded-full px-2 py-1 -translate-y-1/2 left-[50%] shadow -translate-x-1/2">Most Popular</span>
        
        <div>
          <h2 className="text-xl font-bold text-white mb-0.5">{data.name}</h2>
        <p className="text-sm text-white mb-6">
          {data.description}
        </p>
        </div>

       
        <div className="flex text-white items-baseline gap-1 mb-6">
          <span className="text-5xl font-extrabold ">${data.price}</span>
          <span className="text-base  font-medium">/Month</span>
        </div>

       
        <ul className="space-y-3 mb-8">
          {data.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-gray-700"
            >
              <CheckIcon className="text-white"/>
              <span className="text-white">{feature}</span>
            </li>
          ))}
        </ul>

        
        <button className="w-full  bg-white text-[#861CF9]   font-semibold text-sm py-3.5 rounded-full">
          {data.buttonText}
        </button>
      </div>
  )
}

export default Pop