import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveItem}) => {

let message;
if(cart.length ===0){
    message = <p>Please buy one</p>
}else if(cart.length===1){
message = <div>
    <h2>take one for me</h2>
    <p>take one for your</p>
</div>

}
 else{
    message =<p>Thanks for buy</p>
}

    return (
        <div>
            <h2 className={cart.length ===2? `orange` : 'purple'}>Order summery</h2>
            <h5 className={`bold ${cart.length===2 ? 'blue': 'yellow' }`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt => <p
                key = {tshirt._id}
                >
            {tshirt.name}
            <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
             </p>)
            }
            {
                message
            }{
                cart.length ===3? <p>Gift three person</p>: <p>pleasen Buy this</p >
                
            }
            <p>and operator</p>
            {cart.length=== 2 && <h2>double Item</h2>}
            <p>OR Operator</p>
            {cart.length===4 || <p>take four item!</p>}
        </div>
    );
};

export default Cart;