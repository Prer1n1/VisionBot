import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const SensorChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = {
        time: new Date().toLocaleTimeString(),
        temperature: (Math.random() * 10 + 20).toFixed(1),
        moisture: Math.floor(Math.random() * 100),
        light: Math.floor(Math.random() * 1000),
        proximity: (Math.random() * 50).toFixed(1),
      };

      setData(prev => [...prev.slice(-9), newData]); // keep only latest 10
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 text-white rounded-xl shadow-lg p-4 mt-4">
      <h2 className="text-lg font-bold mb-2">📈 Live Sensor Chart</h2>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
        <XAxis dataKey="time" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
        <Line type="monotone" dataKey="moisture" stroke="#00c49f" />
        <Line type="monotone" dataKey="light" stroke="#8884d8" />
        <Line type="monotone" dataKey="proximity" stroke="#ff4444" />
      </LineChart>
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


export default SensorChart;
