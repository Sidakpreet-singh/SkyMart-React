import React, { useContext } from 'react'
import Navbar from '../Components/Navbar'
import AppRoutes from '../Routes/AppRoutes'
import { useNavigate } from 'react-router'
import { MyStore } from '../Context/MyContext'


const App = () => {
const {orderSuccess, setOrderSuccess,navigate,setIsActive,setShowCart} = useContext(MyStore);
  return (
    <div>
     
      {orderSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 px-6">

    <div className="w-full max-w-sm rounded-2xl bg-white p-7 text-center shadow-2xl">

      {/* Success Icon */}
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
        <span className="text-2xl text-green-600">
          ✓
        </span>
      </div>

      <h2 className="mt-5 text-xl font-bold text-slate-900">
        Order Successful!
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Your order has been placed successfully.
        Thank you for shopping with SkyMart.
      </p>

      <button
        onClick={() => {setOrderSuccess(false)
          navigate('/shop');
          setIsActive('shop');
          
        }

        }
        className="
          mt-6 w-full
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
        Continue Shopping
      </button>

    </div>

  </div>
)}
      <AppRoutes/>


      
    </div>
  )
}

export default App
