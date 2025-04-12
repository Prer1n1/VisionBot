// src/App.js
import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UploadImage from './components/UploadImage';
import ObjectDetectionPanel from './components/ObjectDetectionPanel';
import SensorPanel from './components/SensorPanel';
import SensorChart from "./components/SensorChart";
import RobotPredictionPanel from "./components/RobotPredictionPanel";

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
};

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (file) => {
    setUploadedImage(file);
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="dashboard-container">
          <div className="dashboard-row">
            <UploadImage onImageUpload={handleImageUpload} />
            <SensorPanel />
          </div>

          <div className="dashboard-row">
            {uploadedImage && <ObjectDetectionPanel imageFile={uploadedImage} />}
            <SensorChart />
          </div>

          <RobotPredictionPanel />
        </div>
      </main>
    </div>
  );
}



export default App;
