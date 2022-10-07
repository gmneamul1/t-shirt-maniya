import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({house}) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p><small>House: {house} </small></p>
           <section className='flex'>
            
            <Cusin house={house}></Cusin>
            <Cusin house={house}></Cusin>
            <Cusin house={house}></Cusin>
           </section>
        </div>
    );
};

export default Aunty;