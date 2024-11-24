---
title: "Autonomous Object Identification"
link: "https://github.com/ericji1326/mie443"
---

## Project Overview

This project focused on programming a **TurtleBot** to autonomously navigate a mapped environment, locate objects, and identify image tags placed on them. Key features of the project included:

- **Robot Operating System (ROS)** for navigation and control.
- **Kinect 360 Sensor** for image recognition and depth sensing.
- **AMCL** for localization and **move_base** for navigation.

### Task Requirements
The TurtleBot was required to:
- Complete the circuit within **5 minutes**.
- Return to the starting location with object identification results.

---

## Key Strategies

### Navigation
- **Nearest-Neighbor Algorithm**:
  - Optimized object visitation order by minimizing **Euclidean distances** between objects.
- **Object Positioning**:
  - Calculated valid positions relative to objects to ensure clear detection.

### Object Identification
- **OpenCV's SURF Algorithm**:
  - Utilized for feature detection and matching, with **FLANN** for template matching.
- **Fine-Tuned Parameters**:
  - Addressed discrepancies between simulated and real-world conditions.
- **Confidence Levels**:
  - Determined matches for template images, blank images, and duplicates based on confidence thresholds.

---

## Robot Design and Implementation

### Sensory Systems
- **Depth Sensor**: Detected obstacles and aided navigation.
- **RGB Camera**: Captured images for object identification.
- **Bumper Sensors**: Detected collisions and complemented depth sensors for blind spots.
- **Odometry**: Provided relative position and orientation data to ensure accurate localization.

### Controller Architecture
- **High-Level Control**:
  - Determined the robot's global path and object interaction strategy.
- **Low-Level Control**:
  - Managed manual movement in high-cost map areas and handled obstacle avoidance in real-time.

---

## Performance Metrics

- Successfully completed the circuit with reliable object detection in real-world tests.
- Navigation and object identification were effective but highlighted areas for improvement:
  - **Path Planning**: Transition from Euclidean metrics to **map-based distances** for accuracy.
  - **Advanced Image Recognition**: Integrate machine learning models such as **YOLO** or **CNNs**.

---

## Recommendations for Improvement

1. **Path Planning**:
   - Implement **frontier-based exploration** for dynamic path planning.
2. **Image Recognition**:
   - Adopt **machine learning techniques** for enhanced accuracy.
3. **Testing**:
   - Conduct extensive trials in diverse environments to ensure robust performance.

---

## Figures to Include

1. **Figure 4**: Robot’s angle offsets around an object.
2. **Figure 5**: High-cost area navigation issues.
3. **Figure 6**: Feature detection and matching examples.

---

This project highlights the integration of **navigation algorithms** and **image processing techniques** to achieve autonomous object identification, setting the stage for further advancements in robotics and automation.