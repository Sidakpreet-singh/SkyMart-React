import React, { useContext } from "react";
import { MyStore } from "../Context/MyContext";
import { Navigate } from "react-router";

const CartSidebar = () => {
    const { cartitems, setShowCart,incrementQuantity,decrementQuantity,navigate,setIsActive,orderSuccess, setOrderSuccess,setCartitems,isLoggedIn } = useContext(MyStore);
  const subtotal = cartitems.reduce(
    (total, item) => total + Number(item.price) * 83 * (item.quantity || 1),
    0
  );


  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setShowCart(false)}
        className="
          fixed inset-0 z-40
          bg-slate-900/30
          backdrop-blur-[2px]
        "
      />

      {/* Sidebar */}
      <aside
        className="
          fixed right-0 top-0 z-50
          flex h-screen w-full
          max-w-md
          flex-col
          bg-white
          shadow-2xl
        "
      >

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Shopping Cart
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {cartitems.length} items
            </p>
          </div>

          <button
            onClick={() => setShowCart(false)}
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-lg
              text-lg
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-900
            "
          >
            ×
          </button>

        </div>

        {/* Products */}
        <div className="flex-1 overflow-y-auto px-6 py-5">

          {cartitems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">

              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">
                🛒
              </div>

              <h3 className="mt-4 text-base font-semibold text-slate-900">
                Your cart is empty
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Add some products to get started.
              </p>

            </div>
          ) : (
            <div className="space-y-5">

              {cartitems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4"
                >

                  {/* Image */}
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-50">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="min-w-0 flex-1">

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <button className="text-xs text-slate-400 hover:text-red-500">
                        Remove
                      </button>

                    </div>

                    <p className="mt-1 text-xs capitalize text-slate-500">
                      {item.category}
                    </p>

                    <div className="mt-3 flex items-center justify-between">

                      <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-1 py-1">

                        <button onClick={()=>{
                            decrementQuantity(item.id);
                        }}
                         className="flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100">
                          −
                        </button>

                        <span className="w-5 text-center text-xs font-semibold text-slate-900">
                          {item.quantity || 1}
                        </span>

                        <button onClick={()=>{
                            incrementQuantity(item.id);
                        }} className="flex h-6 w-6 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100">
                          +
                        </button>

                      </div>

                      <p className="text-sm font-bold text-slate-900">
                        ₹
                        {Math.round(
                          item.price * 83 * (item.quantity || 1)
                        )}
                      </p>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

        {/* Bottom */}
        {cartitems.length > 0 && (
          <div className="border-t border-slate-200 bg-white px-6 py-5">

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Subtotal
              </span>

              <span className="text-lg font-bold text-slate-900">
                ₹{Math.round(subtotal)}
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-400">
              Shipping calculated at checkout
            </p>

            <button
            onClick={()=>{
                
                
                
                if(isLoggedIn){
                    (setOrderSuccess(true));
                setShowCart(false);
                setCartitems([]);
                localStorage.setItem("cartproducts",JSON.stringify([]));
                }
                else{
                    navigate('/login');
                    
                }
            }}
              className="
                mt-5
                w-full
                rounded-xl
                bg-blue-600
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Checkout
            </button>

            <button
              onClick={() => {setShowCart(false);
                navigate('/shop');
                setIsActive("shop");
              }}
              className="
                mt-2
                w-full
                rounded-xl
                border border-slate-200
                py-3
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:bg-slate-50
              "
            >
              Continue Shopping
            </button>

          </div>
        )}

      </aside>
    </>
  );
};

export default CartSidebar;