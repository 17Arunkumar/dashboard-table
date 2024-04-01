import React, { useEffect } from 'react';
import "./weathercomponents.css";

function Comp() {
  useEffect(() => {
    createProgressBar('temperatureChart', 70);
    createProgressBar('precipitationChart', 40);
    createProgressBar('humidityChart', 50);
  }, []);

  const createProgressBar = (containerId, percentage) => {
    const container = document.getElementById(containerId);
    container.classList.add('progress-bar');

    const fill = document.createElement('div');
    fill.classList.add('progress-fill');
    fill.style.width = `${percentage}%`;

    const percentageText = document.createElement('div');
    percentageText.classList.add('percentage');
    percentageText.textContent = `${percentage}%`;

    container.appendChild(fill);
    container.appendChild(percentageText);
  };

  return (
    <div className="admin-dashboard">
      <main>
        <h2>Weather Overview</h2>
        <div className="charts">
          <div className="chart-container">
            <div className="progress-bar" id="temperatureChart"></div>
            <p className="label">Temperature</p>
          </div>
          <div className="chart-container">
            <div className="progress-bar" id="precipitationChart"></div>
            <p className="label">Precipitation</p>
          </div>
          <div className="chart-container">
            <div className="progress-bar" id="humidityChart"></div>
            <p className="label">Humidity</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default Comp;
