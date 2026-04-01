import { FaFacebook } from "react-icons/fa";

const footerLinks = [
  {
    category: "Product",
    links: ["Features", "Pricing", "Templates", "Integrations"],
  },
  {
    category: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    category: "Resources",
    links: ["Documentation", "Help Center", "Community", "Contact"],
  },
];

const Footer = () => {
  return (
    <div className='w-full mt-10 bg-[#101727] pt-10 sm:pt-20 pb-5 lg:pt-30 xl:pt-40'>
        <div className='container-div flex-wrap border-b border-[#dddddd60] pb-10 text-center gap-5  flex flex-col md:flex-row'>

            <div className="flex-1">
                <h1 className='product-h1 md:text-left text-white font-extrabold'>DigiTools</h1>
                <p className='product-p md:w-[30vw] opacity-70 font-normal md:text-left md:ml-0 mx-auto  justifiy-center text-center text-white'>Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
            </div>

            <div className="grid  grid-cols-1 gap-5 md:grid-cols-3">

            {footerLinks.map(footerLink => {
                return (
                    <div>
                    
                    <ul className="md:text-left">
                        {  <>
                            <h1 className="md:text-left md:ml-0 font-bold text-xl text-white"  key={footerLink.category} >{footerLink.category}</h1>
                            {footerLink.links.map(cate => {
                                return (
                                    <li className="text-[16px] opacity-70 text-white " key={cate}><a>{cate}</a></li>
                                )
                            })}
                            </>
                        }

                    </ul>
                    </div>


                )
            })}
            
            </div>

            <div>
                <h1 className="md:text-left text-xl    font-bold text-white md:ml-0 mb-2  pl-3">Social Links</h1>
                <div className="grid grid-cols-3 mx-auto  w-[150px]">
                    <div className="w-8 h-8 flex mx-auto justify-center items-center rounded-full bg-white text-black"><i class="fa-brands fa-facebook-f"></i></div>
                    <div className=" mx-auto w-8 h-8 flex justify-center items-center rounded-full bg-white text-black"><i class="fa-brands fa-instagram"></i></div>
                    <div className="  mx-auto  w-8 h-8 flex justify-center items-center rounded-full bg-white text-black"><i class="fa-brands fa-twitter"></i></div>
                    <FaFacebook />
                </div>
            </div>

        </div>
        <div className="container-div flex justify-between py-4">
            <p className="text-white font-semibold opacity-70">© 2026 Digitools. All rights reserved.</p>
            <ul className="text-white font-semibold opacity-70 flex gap-4">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer