---
title: "Maze-Solving Rover Project"
---

## Project Overview

The **Wall-E Vader** project focused on designing an **autonomous rover** capable of navigating a predefined maze, localizing itself, avoiding obstacles, and completing tasks such as picking up and delivering a block to designated zones. The rover achieved **SAE Level 5 autonomy** by integrating obstacle avoidance, localization, and block manipulation into a single operational algorithm.

---

## Key Features and Strategies

### Obstacle Avoidance
- **Sensors**:
  - Four ultrasonic sensors and two infrared (IR) sensors for precise obstacle detection and corner handling.
- **Challenges Addressed**:
  - Replaced unreliable ultrasonic corner sensors with IR sensors for improved detection.
  - Enhanced calibration and redesigned sensor mounts for consistent readings.
- **Results**:
  - Successfully avoided major collisions, enhancing the overall reliability of navigation.

### Localization and Navigation
- **Algorithm**:
  - Employed histogram-based localization combined with a compass for orientation.
- **Efficiency**:
  - Localized within 1–2 maze squares of movement, leveraging predefined paths and headings.
- **Execution**:
  - Hard-coded paths simplified navigation but limited adaptability to environmental changes.

### Block Pick-Up and Delivery
- **Detection**:
  - Dual time-of-flight sensors identified blocks based on vertical offsets.
- **Manipulation**:
  - Servo-powered rack-and-pinion claw picked up blocks, assisted by a funnel design to correct alignment errors.
- **Challenges**:
  - Sensor misalignments and mounting inconsistencies were mitigated but not fully eliminated.
  - Hard-coded paths required precise block placement within the maze.

### Integration
- All subsystems were combined seamlessly into a unified algorithm.
- Starting locations and transitions between tasks were carefully managed to ensure autonomous operation.

---

## Final Results

- **Performance**:
  - Completed the maze in **3 minutes 20 seconds**, well under the 5-minute limit.
- **Reliability**:
  - Executed navigation, localization, and block delivery with minimal errors.
- **Key Insights**:
  - Accurate localization achieved via a compass-aided algorithm.
  - Gripper’s modular design allowed reliable block handling, though reliance on predefined conditions limited robustness.

---

## Recommendations and Improvements

### Mechanical Design
- Improve structural integrity by replacing taped or glued components with robust mounts.
- Balance weight distribution to reduce the need for frequent motor recalibrations.

### Algorithm Enhancements
- Transition from hard-coded paths to dynamic path planning algorithms for better adaptability.
- Implement real-time angle corrections during navigation and block handling.

### Electrical Optimization
- Organize cable routing to simplify troubleshooting.
- Incorporate encoder feedback to improve movement precision.

### Sensor Utilization
- Optimize sensor routines to reduce processing delays.
- Enhance the block-finding algorithm to handle arbitrary block placements.

---

## Figures to Include
1. **Figure 1**: Sensor layout comparison.
2. **Figure 4**: Heat map overlay of localization.
3. **Figure 11**: Initial vs. final mechanical design.
4. **Figure 13**: Final electrical circuit diagram.

---

This project showcases the effective integration of **mechanical, electrical, and software subsystems** into a cohesive, autonomous solution, achieving significant milestones in mechatronics design and implementation.
