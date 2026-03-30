import { ShoppingCart } from "lucide-react";

const NavBar = ({cartData}) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex justify-between container-div">
          <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
              <a>Products</a>
            </li>

            <li>
              <a>Feature</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>

            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            </ul>
          </div>
          <a className="text-transparent font-extrabold bg-clip-text  text-xl lin-col md:text-3xl">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>Products</a>
            </li>

            <li>
              <a>Feature</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>

            <li>
              <a>Testimonials</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3 sm:gap-6 font-semibold">
          <div className="indicator">
            <span className="indicator-item h-5 w-5 bg-red-600 rounded-full p-1  indicator-top indicator-end badge badge-secondary">{cartData.length}</span>
            <ShoppingCart />
          </div>

          <a>Login</a>
          <a className="btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white  rounded-full">Get Stated</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
