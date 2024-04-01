import React from 'react';
import { Dashboard } from "./screen/ind1";
import Weather from './Weather';
import './integrate.css';
import Comp from './weathercomponents';

function Integrate() {
  return (
    <div className='integrate'>
      <div className='container1'>
      <div className="weather">
      <Weather />
      </div>
      <div>
        <Comp/>
      </div>
      </div>
      <div className='dash'>
      <Dashboard />
      </div>
    </div>
  );
}

export default Integrate;
