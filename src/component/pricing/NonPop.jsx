import { CheckIcon } from "lucide-react";
import React from "react";

const NonPop = ({data}) => {
  return (
    
      <div className="bg-white shadow-xl border-gray-300 rounded-2xl relative flex flex-col justify-between p-7 w-[350px] mx-auto lg:w-[320px] xl:w-[360px]">
        
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-0.5">{data.name}</h2>
        <p className="text-sm text-gray-500 mb-6">
          {data.description}
        </p>

       
        <div className="flex items-baseline gap-1 mb-6">
          <span className="text-5xl font-extrabold text-gray-900">${data.price}</span>
          <span className="text-base text-gray-400 font-medium">/Month</span>
        </div>
        </div>

       
        <ul className="space-y-3 mb-8">
          {data.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-gray-700"
            >
              <CheckIcon className="text-green-600"/>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        
        <button className="w-full bg-indigo-500 text-white font-semibold text-sm py-3.5 rounded-full  ">
          {data.buttonText}
        </button>
      </div>
    
  );
};

export default NonPop;
