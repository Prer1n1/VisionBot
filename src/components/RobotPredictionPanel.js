// src/components/RobotPredictionPanel.js
import React, { useEffect, useState } from "react";

const RobotPredictionPanel = () => {
  const [sensorData, setSensorData] = useState({
    temperature: 0,
    moisture: 0,
    light: 0,
    proximity: 0,
  });

  const [robotDecision, setRobotDecision] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSensorData = {
        temperature: (Math.random() * 10 + 20).toFixed(1),
        moisture: Math.floor(Math.random() * 100),
        light: Math.floor(Math.random() * 1000),
        proximity: (Math.random() * 50).toFixed(1),
      };

      setSensorData(newSensorData);
      setRobotDecision(makeRobotDecision(newSensorData));
    }, 3000); // update every 3s

    return () => clearInterval(interval);
  }, []);

  const makeRobotDecision = (data) => {
    const decisions = [];

    if (data.proximity < 10) {
      decisions.push("🛑 Object very close! Stop movement.");
    } else {
      decisions.push("✅ Path is clear.");
    }

    if (data.light < 100) {
      decisions.push("💡 It's dark! Turn on headlight.");
    }

    if (data.moisture < 30) {
      decisions.push("🚿 Soil is dry! Activate watering system.");
    }

    return decisions;
  };

  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg p-4 mt-4">
      <h2 className="text-lg font-bold mb-2">🤖 Robotic Prediction Logic</h2>
      <p>🌡️ Temperature: {sensorData.temperature} °C</p>
      <p>💧 Moisture: {sensorData.moisture} %</p>
      <p>💡 Light: {sensorData.light} lx</p>
      <p>📍 Proximity: {sensorData.proximity} cm</p>

      <div className="mt-3">
        <h3 className="text-md font-semibold">Robot Decision:</h3>
        <ul className="list-disc ml-5">
          {robotDecision.map((decision, idx) => (
            <li key={idx}>{decision}</li>
          ))}
        </ul>
      </div>
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
  dashboardContainer: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
    justifyContent: 'center',
  },
};

export default RobotPredictionPanel;
