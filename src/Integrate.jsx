import React from 'react';
import { Dashboard } from "./screen/ind1";
import Weather from './Weather';
import './integrate.css';

function Integrate() {
  return (
    <div className='integrate'>
      <div>
      <Weather className="wea"/>
      </div>
      
      <div className='dash'>
      <Dashboard />
      </div>
    </div>
  );
}

export default Integrate;
