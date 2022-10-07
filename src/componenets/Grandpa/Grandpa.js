import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncale/Uncle';
import Father from './Father/Father';
import "./Grandpa.css"

 export const RingContext =createContext('Matir Ring');
 export const MoneyContext = createContext(555)

const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const [money, setMoney] = useState(555)
//   const house = 7;
  const ring = 'Diomond Ring'
    return (
      <RingContext.Provider value={[house, setHouse]}>
          <MoneyContext.Provider value={[money, setMoney]}>
          <div className='grandpa'>
            <h2>grandpa</h2>
            <section className='flex' >
        <Father house={house} ></Father>
        <Uncle  house={house}></Uncle>
        <Aunty house={house} ring={ring}></Aunty>

            </section>
        </div>
          </MoneyContext.Provider>
      </RingContext.Provider>
    );
};

export default Grandpa;