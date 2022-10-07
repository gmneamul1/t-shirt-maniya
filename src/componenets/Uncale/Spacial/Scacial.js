import React from 'react';
import { useContext } from 'react';
import { RingContext } from '../../Grandpa/Grandpa';

const Scacial = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>Specil</h3>
            
            <p><small>ring: {house}</small></p>
            <button onClick={()=>setHouse(house +1)}>Increase</button>
        </div>
    );
};

export default Scacial;