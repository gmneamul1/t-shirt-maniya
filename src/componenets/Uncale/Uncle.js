import React from 'react';
import { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money, setMoney] =useContext(MoneyContext)
    return (
        <div>
            <h1>uncle</h1>
            <p><small>House: {house} </small></p>
            <p><small>Money: {money} </small></p>
        </div>
    );
};

export default Uncle;