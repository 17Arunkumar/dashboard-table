import React from 'react';
import { Dashboard } from "./screen/ind1";
import Weather from './Weather';
import './integrate.css';
import Comp from './weathercomponents';
import DailyForecastWidget from './DailyForecast';

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
      <div>
        <DailyForecastWidget/>
      </div>
      </div>
      <div className='dash'>
      <Dashboard />
      </div>
    </div>
  );
}

export default Integrate;
