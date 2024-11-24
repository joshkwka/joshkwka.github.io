---
title: "Autonomous Robot Search of an Environment"
link: "https://github.com/ericji1326/mie443"
---

This project involves the development and implementation of an **autonomous TurtleBot** capable of exploring and mapping an unknown environment. The key features of the project include:

- **Simultaneous Localization and Mapping (SLAM)**: Used **GMapping** for accurate mapping.
- **Robot Platform**: Utilized an **iClebo Kobuki base** equipped with:
  - Bumper sensors
  - Cliff sensors
  - Kinect RGB camera and depth sensors.
- **Environment Constraints**: Explored a **4.87x4.87 m²** area with obstacles, completing the task autonomously within **8 minutes**.

## Technology Stack

- **Language**: C++
- **Algorithm**: Depth-First Search (**DFS**) for exploration.
- **Framework**: Robot Operating System (**ROS**).
- **Sensors**: Laser, bumper, and odometry sensors for navigation and localization.

## Features

### Exploration Strategy
- **Comprehensive Mapping**: Implemented a **DFS algorithm** to ensure systematic traversal.
- **Obstacle Avoidance**:
  - **Laser Sensors**: Detected obstacles and facilitated real-time adjustments.
  - **Bumper Sensors**: Detected close-range collisions to complement laser feedback.
- **Node-Based Navigation**: Ensured efficient exploration while minimizing redundant paths.

### Robot Design
- **High-Level Controller**:
  - Executed the **DFS algorithm** to determine optimal paths.
  - Planned valid object detection locations to ensure clear visibility.
- **Low-Level Controller**:
  - Managed sensor inputs and actuator responses for precise real-time navigation.
- **Sensory Integration**:
  - **Odometry Sensors**: Maintained positional accuracy despite odometry drift.

## Key Findings

- **DFS Algorithm**:
  - Structured exploration allowed efficient coverage, but occasional inaccuracies occurred due to sensor drift.
- **Randomized Exploration**:
  - Improved coverage of unexplored areas by adding random movements during the final 2 minutes.
- **Precise Navigation**:
  - Adjusted sensory feedback and control responses enabled effective obstacle avoidance and navigation.

## Recommendations

1. **Frontier-Based Exploration**:
   - Use occupancy grids to dynamically identify unexplored regions.
2. **Path Planning Optimization**:
   - Implement advanced algorithms like **A*** for enhanced traversal efficiency.
3. **Robust Testing**:
   - Conduct real-world trials in diverse environments to refine the system.

## Figures to Include

- **Figure 1**: High-level and low-level controller flowchart.
- **Figure 2**: Visualization of DFS algorithm traversal.
- **Graph Representation**: Node-based exploration map showing visited and unexplored nodes.

This project highlights the successful integration of robotics and algorithmic strategies to address challenges in autonomous mapping and navigation, paving the way for scalable robotic solutions in dynamic environments.
