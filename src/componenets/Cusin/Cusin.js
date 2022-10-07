import React from 'react';
import Friend from '../Friend/Friend';

const Cusin = ({house}) => {
    return (
        <div>
            <h3>Cousin </h3>
            <h5>House: {house}</h5>
            <section>
        <Friend></Friend>

            </section>
        </div>
    );
};

export default Cusin;