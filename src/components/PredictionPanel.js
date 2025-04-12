import React, { useEffect, useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import '@tensorflow/tfjs';

function PredictionPanel({ imageFile }) {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageFile) {
      runPrediction();
    }
  }, [imageFile]);

  const runPrediction = async () => {
    setLoading(true);
    await tf.ready();  // Ensure TensorFlow.js is ready

    const imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(imageFile);

    imgElement.onload = async () => {
      const model = await mobilenet.load();
      const results = await model.classify(imgElement);
      setPredictions(results);
      setLoading(false);
    };
  };

  return (
    <div style={styles.panel}>
      <h3>🔍 Prediction Results</h3>
      {loading && <p>Analyzing image...</p>}
      {!loading && predictions.length > 0 && (
        <ul>
          {predictions.map((p, index) => (
            <li key={index}>
              {p.className} — <strong>{(p.probability * 100).toFixed(2)}%</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  panel: {
    margin: '1rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#eef7ff',
    width: '300px',
    textAlign: 'left'
  }
};

export default PredictionPanel;
