import { ShoppingCart, ShoppingCartIcon } from "lucide-react";
import { toast } from "react-toastify";

const Cart = ({ cartData, setCartData }) => {
  let total = 0;

  const removeItem = (data) => {
    let temp = cartData.filter((x) => x.id != data.id);
    setCartData(temp);
    toast(`${data.title} remove from the cart`)
  };

  const checkout = () => {
    toast("Proceed To checkout Succesfully")
    setCartData([]);
  };

  return (
    <div className="container-div border border-[#dddddd91]  rounded-xl mt-10 p-8  ">
      <h3 className="mb-6 font-bold text-2xl text-left">Your Cart</h3>

      {cartData.length != 0 ? (
        <>
          {" "}
          <div className="cart-container gap-4 flex flex-col">
            {cartData.map((cartItem) => {
              console.log(cartItem);
              total += cartItem.price;

              return (
                <div key={cartItem.id} className="cartItem-div">
                  <div className="left flex items-center gap-2">
                    <img className="w-8 h-8" src={cartItem.img}></img>
                    <div className="flex flex-col">
                      <h5 className="font-semibold text-[20px] text-black">
                        {cartItem.title}
                      </h5>
                      <span className="font-medium text-gray-500">
                        {cartItem.price}$
                      </span>
                    </div>
                  </div>
                  <button
                    className="font-bold text-gray-400"
                    onClick={() => removeItem(cartItem)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
          <div className="total-price mt-12 flex justify-between items-center">
            <div className="text-gray-400 font-bold">Total:</div>
            <div className="text-xl font-bold text-gray-900">${total}</div>
          </div>
          <button
            className="btn py-4 mt-10 w-full font-bold text-[16px] text-white rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA]"
            onClick={() => checkout()}
          >
            Proceed To Checkout
          </button>
        </>
      ) : (
        <div className="w-full h-[500px]flex justify-center items-center">
          <div className="w-fit mx-auto">
            <ShoppingCart
              className="text-gray-400 "
              size={150}
              strokeWidth={3}
            />
            <p className="text-gray-400 font-semibold text-center mt-5">
              Your cart is Empty
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
