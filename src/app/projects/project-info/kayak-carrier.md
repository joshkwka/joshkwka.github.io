---
title: "MIE442 Design Project: Kayak Carrier"
---

## Project Overview
![Printer](/images/projects/kayak-carrier/assembly.png)

This project focuses on designing a lightweight, portable kayak carrier optimized for strength-to-weight ratio, durability, and cost-efficiency. The carrier is designed to transport loads up to **100 kg** over rough terrains at **4 km/h**. Critical analyses included **motion simulation**, **finite element analysis (FEA)**, and **analytical methods** to evaluate stress, deflection, and fatigue.

---

## Key Features and Design

- **Inspired by**: RAD Sportz Premium Aluminum Kayak Cart.
- **Material Selection**:
  - **6061 aluminum T6**: Lightweight structural components.
  - **304 stainless steel**: Fasteners for corrosion resistance.
- **Weight**: Achieves a low weight of **2.53 kg**, significantly lighter than the **4.1 kg** reference design.
- **Design Simplifications**:
  - Wheels modeled as cylinders.
  - Thread geometries for fasteners excluded.
  - Tension straps omitted, assuming fixed positions.

---

## Analysis and Results

### Motion Analysis:
- Simulated a worst-case impact scenario:
  - **Curb at 60° and 15 cm height**.
  - Forces acting on the carrier determined.
- **Critical stress points**:
  - Main bar and Fastener B.
- **Impact Forces**:
  - Max Y-axis force on main bar: **945 N**.

![Printer](/images/projects/kayak-carrier/reaction-force.png)

### Finite Element Analysis (FEA):
- Focused on **main bar** and **Fastener B**:
  - **Main Bar**:
    - Improved Factor of Safety (FOS) from **1.45** to **2.11** by increasing pipe thickness.
![Printer](/images/projects/kayak-carrier/main-bar-analysis.png)

  - **Fastener B**:
    - Von-Mises FOS: **2.33**.
    - Deformation limited to **0.0051 mm**.
![Printer](/images/projects/kayak-carrier/pin-analysis.png)

### Analytical Calculations:
- Complemented FEA results with **stress**, **deflection**, and **fatigue analysis**.
- Highlighted **fatigue FOS of 1.80** for the main bar under conservative assumptions.

---

## Recommendations and Future Improvements

- **Enhance Design**:
  - Increase cross-sectional dimensions of pipes and fasteners for better strength-to-weight performance.
- **Material Selection**:
  - Consider **316 stainless steel** for superior corrosion resistance.
- **Further Analysis**:
  - Study environmental effects (corrosion, terrain).
  - Conduct multi-impact simulations for diverse operational conditions.
  - Refine model for greater accuracy.
