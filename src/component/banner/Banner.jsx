import { Play } from "lucide-react";

const Banner = () => {
  return (
    <div className="container-div mt-20 md:mt-30  items-center flex flex-col lg:flex-row gap-5 lg:gap-0  justify-between">


        {/* banner-left/top side  */}
      <div className="left-side text-center lg:text-left">
        <div className="banner-badge">
          <img className="w-5 h-5" src="/assets/Group 5 (2).png"></img>
          <p className="lin-col bg-clip-text text-transparent font-medium text-[16px]">
            New:AI-Powered Tools Available
          </p>
        </div>

        <h1 className="banner-h1">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="banner-p">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>

        <div className="banner-btn flex gap-1 justify-center mx-auto lg:ml-0 w-fit  ">
            <button className="btn   font-semibold rounded-full    bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white">Explore Products</button>


            <button className="btn text-[#4F39F6] border-2 border-[#4F39F6] rounded-full "><Play />Watch Demo</button>
        </div>

      </div>



      {/* banner right/bottom side  */}


      <div className="right-side p-2">
        <img className="banner-img" src="/assets/banner.png"></img>
      </div>
    </div>
  );
};

export default Banner;
