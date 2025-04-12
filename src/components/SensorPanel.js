// src/components/SensorPanel.js
import React, { useState, useEffect } from "react";

const SensorPanel = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    moisture: 0,
    light: 0,
    proximity: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData({
        temperature: (Math.random() * 10 + 20).toFixed(1),  // 20 - 30 °C
        moisture: (Math.random() * 100).toFixed(0),         // 0 - 100%
        light: (Math.random() * 1000).toFixed(0),           // in lumens
        proximity: (Math.random() * 50).toFixed(1),         // 0 - 50 cm
      });
    }, 2000); // updates every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg p-4">
      <h2 className="text-lg font-bold mb-2">🔬 Sensor Readings</h2>
      <p>🌡️ Temperature: {sensorData.temperature} °C</p>
      <p>💧 Moisture: {sensorData.moisture} %</p>
      <p>💡 Light Level: {sensorData.light} lx</p>
      <p>📍 Proximity: {sensorData.proximity} cm</p>
    </div>
  );
};

const styles = {
  panel: {
    backgroundColor: '#1e1e1e',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #333',
    boxShadow: '0 0 12px rgba(0,0,0,0.5)',
    width: '100%',
    maxWidth: '400px',
    flex: '1',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
};

export default SensorPanel;
