import React, { useRef, useEffect, useState } from 'react';
import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

const PoseEstimationPanel = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      await videoRef.current.play();
    };

    const loadDetector = async () => {
      const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
      setDetector(detector);
    };

    setupCamera();
    loadDetector();
  }, []);

  useEffect(() => {
    const detectPose = async () => {
      if (detector && videoRef.current.readyState === 4) {
        const poses = await detector.estimatePoses(videoRef.current);
        drawKeypoints(poses);
      }
      requestAnimationFrame(detectPose);
    };

    const drawKeypoints = (poses) => {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      poses.forEach(({ keypoints }) => {
        keypoints.forEach((kp) => {
          if (kp.score > 0.5) {
            ctx.beginPath();
            ctx.arc(kp.x, kp.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = 'lime';
            ctx.fill();
          }
        });
      });
    };

    detectPose();
  }, [detector]);

  return (
    <div className="relative w-full h-[480px]">
      <video ref={videoRef} className="absolute w-full h-full object-cover" />
      <canvas ref={canvasRef} width="640" height="480" className="absolute w-full h-full" />
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
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '1rem',
    textAlign: 'center'
  }
};


export default PoseEstimationPanel;
