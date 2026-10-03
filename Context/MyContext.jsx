import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from 'axios';


export const MyStore = createContext();


export const ContextProvider =({children})=>{
    const navigate = useNavigate();




    const getProducts =  async ()=>{
        try{
            const data = await axios.get('https://dummyjson.com/products?limit=100');
          
            setProducts(data.data.products);
            localStorage.setItem('products',JSON.stringify(data.data.products));
            
    
        }
        catch(err){
            console.log(err);
            
        }
    }
    const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    const [cartitems,setCartitems] = useState(JSON.parse(localStorage.getItem('cartproducts')) || []);
    useEffect(()=>{
        getProducts();
        
    },[]);
     const goToCategories = () => {
    navigate("/home");

    setTimeout(() => {
      document
        .getElementById("categories")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };
    const [searchValue,setSearchValue] = useState('');
    const [loggedUser,setLoggedUser] = useState({});
    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users')) ||[]);
    const [isLoggedIn,setIsLoggedIn] = useState( localStorage.getItem("isLoggedIn") === "true");
    const [showCart, setShowCart] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [selectedCategory,setSelectedCategory] =useState("All Products");
    const [isActive,setIsActive] = useState("home");
         const incrementQuantity = (id) =>{
        const item = cartitems.find((elem) =>  elem.id === id);
    item.quantity++;
    setCartitems((prev)=>[...prev]);
    localStorage.setItem('cartproducts',JSON.stringify(cartitems));
    }
    const decrementQuantity=(id)=>{
         const item = cartitems.find((elem) =>  elem.id === id);
    item.quantity--;
    setCartitems((prev)=> {
        let updatedCart = prev.filter((el) => el.quantity> 0);
         localStorage.setItem('cartproducts',JSON.stringify(updatedCart));
        return updatedCart;


    });
}
        
   
    


    return <MyStore.Provider value={{loggedUser,setLoggedUser,users,setUsers,isLoggedIn,setIsLoggedIn,searchValue,setSearchValue,isActive,setIsActive,products,selectedCategory,setSelectedCategory,goToCategories,navigate,setProducts,cartitems,setCartitems,incrementQuantity,decrementQuantity,showCart, setShowCart,orderSuccess, setOrderSuccess,showProfile, setShowProfile}}>{children}</MyStore.Provider>

}