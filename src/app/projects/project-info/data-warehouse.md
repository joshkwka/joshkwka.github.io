---
title: "Coursework: Peachtree Data Warehouse"
---

This project is a **full-stack web application** featuring a fully normalized PostgreSQL data warehouse, a Python/Sanic REST API, and a Node-based frontend. Its purpose is to store and analyze store, membership, and sales data, and to generate a suite of analytical reports for business decision-making.

##
---
## Backend Architecture

- **Frameworks**: Python (Sanic) backend, Node/JavaScript frontend  
- **Database Design**:
  - Fully normalized PostgreSQL schema for manufacturers, products, stores, memberships, discounts, and sales transactions
  - Designed collaboratively using ER modeling and functional dependencies  

##
---
## Technology Stack

- **Backend**: Sanic, Python
- **Frontend**: Node, HTML/CSS, JavaScript
- **Database**: PostgreSQL

##
---
## Project Overview

The application implements a collection of data-entry tools and analytical reports:

- **Manage Holidays** – View and add holiday entries.
- **Manage City Populations** – View and update population data for all operating cities.
- **Report 1: Manufacturer's Product Report** – Detailed manufacturer and product listings.
- **Report 2: Category Report** – Sales breakdown by product category.
- **Report 3: Actual vs. Predicted Speaker Revenue** – Compares real sales with predicted sales assuming a 25% revenue drop without discounts.
- **Report 4: Store Revenue by Year by State** – Annual revenue totals grouped by state.
- **Report 5: Air Conditioners on Groundhog Day** – Compares average daily AC revenue to Groundhog Day sales per year.
- **Report 6: State with Highest Volume per Category** – For a selected year and month, identifies the highest-volume state for each product category.
- **Report 7: Revenue by Population Size** – Groups cities by population tier and displays average yearly revenue per tier.
- **Report 8: Membership Trends** – Shows yearly membership sales, top and bottom 25 cities per year, and supporting store-level breakdowns.

##
---
## Roles and Workflow
- **Team Structure**: 5-person team over a 3-month semester project.
- **Database Design**: Each member drafted an initial schema; we merged designs into a final ER model through group critique and refinement.
- **My Backend Contributions**:
  - Authored `schema.sql` including all tables, keys, and constraints.
  - Wrote queries for:
    - Main menu overview  
    - Holiday management  
    - City population management  
    - Report 1 (Manufacturers & Products)  
    - Report 4 (Store Revenue by Year/State)
    - Report 8 (Membership Sales per Year)

- **My Full-Stack Contributions**:
  - Developed the entire frontend + backend for **Report 6** and **Report 7**
  - Submitted and reviewed pull requests to maintain code quality

![DataWarehouseMain](/images/projects/data-warehouse/data-warehouse-main.png)
![DataWarehouseReport6](/images/projects/data-warehouse/data-warehouse-holidays.png)
![DataWarehouseReport7](/images/projects/data-warehouse/data-warehouse-cities.png)
![DataWarehouseReport6](/images/projects/data-warehouse/data-warehouse-r1.png)
![DataWarehouseReport7](/images/projects/data-warehouse/data-warehouse-r2.png)
![DataWarehouseReport6](/images/projects/data-warehouse/data-warehouse-r3.png)
![DataWarehouseReport7](/images/projects/data-warehouse/data-warehouse-r4.png)
![DataWarehouseReport6](/images/projects/data-warehouse/data-warehouse-r5.png)
![DataWarehouseReport7](/images/projects/data-warehouse/data-warehouse-r6.png)
![DataWarehouseReport6](/images/projects/data-warehouse/data-warehouse-r7.png)
![DataWarehouseReport7](/images/projects/data-warehouse/data-warehouse-r8.png)

