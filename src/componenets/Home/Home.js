import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import Cart from "./Cart/Cart";
import "./Home.css";
const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    const exists = cart.find(ts => ts._id === tshirt._id ) ;
    if (exists){
        alert('tshirt already added')
        return;
    } else{
        const newCart =[...cart, tshirt];
        setCart(newCart);
    }

    const newCart = [...cart, tshirt];
    setCart(newCart);
  };

  const handleRemoveItem = tshirt => {
    const remainig = cart.filter(ts => ts._id !==tshirt._id);
    setCart(remainig)
  }

  return (
    <div className="home-container">
      <div className="t-shirt-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div>
        <div className="cart-container">
          <Cart 
          handleRemoveItem={handleRemoveItem}
          cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
