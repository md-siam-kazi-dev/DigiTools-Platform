import React from "react";

const steps = [
  {
    id: "01",
    icon: "/assets/user.png",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    id: "02",
    icon: "/assets/package.png",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    id: "03",
    icon: "/assets/rocket.png",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const GetStart = () => {
  return (
    <div className="container-div text-center mt-20">
      <h1 className="product-h1">Get Started In 3 Steps</h1>
      <p className="product-p">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="card-container mt-10 grid-cols-1 gap-4 grid md:grid-cols-3">
        {steps.map(step => {
            return (
               
                  <div key={step.id} className="rounded-xl gap-4 items-center shadow-md border-[#dddddd5f] w-[340px] mx-auto md:w-full relative  border flex-col flex justify-center  py-20 px-4">
                    <div className="p-3 w-fit h-fit rounded-full bg-blue-200">
                        <img src={step.icon}></img>
                    </div>
                    <span className="absolute bg-blue-600 text-white font-semibold rounded-full p-1 w-8 h-8 top-4 right-4">{step.id}</span>
                    <h1 className="font-bold text-2xl">{step.title}</h1>
                    <p className="text-gray-400 ">{step.description}</p>
                  </div>
                
            )
        })}
      </div>
    </div>
  );
};

export default GetStart;
