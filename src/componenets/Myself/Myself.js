import React from 'react';
import Scacial from '../Uncale/Spacial/Scacial';

const Myself = ({house, }) => {
    return (
        <div>
            <h2>my self</h2>
            <p><small>house: {house}</small></p>
            
            <section>
                <Scacial ></Scacial>
            </section>
        </div>
    );
};

export default Myself;