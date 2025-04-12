import React, { useRef, useEffect, useState } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs';

function ObjectDetectionPanel({ imageFile }) {
  const imageRef = useRef();
  const canvasRef = useRef();
  const [model, setModel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cocoSsd.load().then(model => {
      setModel(model);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (model && imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          detectObjects(img);
        };
        imageRef.current.src = reader.result;
      };
      reader.readAsDataURL(imageFile);
    }
  }, [model, imageFile]);

  const detectObjects = async (img) => {
    const predictions = await model.detect(img);
    console.log("Predictions:", predictions);

    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = img.width;
    canvasRef.current.height = img.height;
    ctx.clearRect(0, 0, img.width, img.height);
    ctx.drawImage(img, 0, 0);

    predictions.forEach(pred => {
      if (pred.score > 0.5) {
        const [x, y, width, height] = pred.bbox;
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = "#00FF00";
        ctx.font = "16px Arial";
        ctx.fillText(`${pred.class} (${(pred.score * 100).toFixed(1)}%)`, x, y > 20 ? y - 5 : y + 15);
      }
    });
  };

  return (
    <div style={styles.panel}>
      <h3 style={styles.heading}>🎯 Object Detection</h3>
      {loading ? (
        <p style={styles.loadingText}>Loading model...</p>
      ) : (
        <div style={styles.imageContainer}>
          <canvas ref={canvasRef} style={styles.canvas}></canvas>
          <img ref={imageRef} alt="Uploaded" style={{ display: "none" }} />
        </div>
      )}
    </div>
  );
}

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
  canvas: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '8px',
  },
};

export default ObjectDetectionPanel;
