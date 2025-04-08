# VisionBot
VisionBot 

1. Robotic Prediction Logic Panel
Uses simulated temperature, moisture, light, and proximity sensor readings.

Implements rule-based robotic decision-making logic:

Stops the robot if an object is too close.

Turns on lights in low-light conditions.

Waters the soil when moisture is low.

Dynamically updates every few seconds to reflect real-time behavior.

🔍 2. Object Detection Panel
Utilizes TensorFlow.js with COCO-SSD to detect objects in uploaded images.

Displays bounding boxes and labels directly on the canvas.

Enables basic computer vision capabilities in the browser without requiring a backend server.

🌡️ 3. Sensor Data Panel
Simulates the following IoT-style sensors:

🌡️ Temperature sensor

💧 Moisture sensor

💡 Light sensor

📍 Proximity sensor

Sensor values are updated periodically to mimic real-time environmental data.

📸 4. Image Upload and Preview Panel
Allows users to upload an image from their local system.

Feeds into the object detection module for inference.

Shows live previews of images selected by the user.
