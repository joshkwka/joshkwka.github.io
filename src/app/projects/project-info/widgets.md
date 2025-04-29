---
title: "Productivity Widgets"
link: "https://github.com/joshkwka/widgets"
---

This is a **full-stack web application** that provides modular **productivity tools** with a **Django backend** and **React frontend**. The application focuses on a clean, scalable architecture and efficient data management.

##
---
## Backend Architecture

- **Framework**: Django REST Framework (**DRF**) to build RESTful APIs.
- **Authentication**:
  - **Token-based authentication** using Django's `rest_framework.authtoken` to secure endpoints.
  - Login and registration endpoints with token issuance and validation.
- **Database Design**:
  - **PostgreSQL** used for storing user data, widgets, and preferences.
  - Foreign key relationships to link users to their widget layouts and preferences.
- **Data Handling**:
  - Designed APIs to support **CRUD** operations for user preferences, enforcing proper data access controls.

##
---
## Frontend Overview

- **Framework**: React with functional components and hooks.
- **State Management**:
  - Local component state and API calls to manage widget data.
- **API Integration**:
  - Used `fetch`/`axios` for secure communication with the Django backend and stored tokens in `localStorage` for persistent sessions.
- **UI Design**:
  - Modular widget components designed for easy customization and extension.

##
---
## Technology Stack

- **Backend**: Django, Django REST Framework
- **Frontend**: React, HTML/CSS, JavaScript
- **Database**: PostgreSQL (SQLite for local development)
- **Authentication**: Token-based Authentication (DRF)

##
---
## Widgets

The application provides the following productivity tools:
- **Clock**: Displays the current time.
- **To-Do List**: A simple task manager for daily activities.
- **Calculator**: A basic calculator for quick calculations.
- **Notes**: A note-taking widget for quick jotting down of ideas.
- **Pomodoro Timer**: A time management tool based on the Pomodoro Technique.
- **Bookmarks**: A place to store and access links.
- **Weather Forecast**: Displays weather information using an external API for real-time weather updates based on user location.

##
## Features

### User Authentication
- **Magic Link Authentication**:
  - Users receive a one-time login link via email for password-free login.
  - Secure token is used for authentication after the link is clicked.
- **Token Management**:
  - Tokens are used to manage user sessions and secure API endpoints.

### Database Organization
- **Widget Table**:
  - Stores metadata for each widget.
- **User Preferences Table**:
  - Maps user IDs to widget settings (e.g., weather location, timers).
- **Data Validation**:
  - Ensures all user inputs are validated server-side before saving to the database.

### Widget Preferences
- **Customization**:
  - Users can modify widget settings, with changes persisted and reloaded on login.
- **Efficient Updates**:
  - Implemented PATCH requests to update widget settings without replacing entire objects.

##
## Recommendations

1. **OAuth Integration**:
   - Add sign-in options for Google or GitHub.
2. **Magic Link Security**:
   - Improve security by shortening token expiration times and enforcing one-time-use policies.
3. **Caching Layer**:
   - Add caching (e.g., Redis) to improve performance for frequently accessed data.
4. **User Personalization**:
   - Expand user profiles to support customizable layouts, themes, and notifications.

![WidgetsScreenshot](/images/projects/widgets.png)
![WidgetsCalendar](/images/projects/widgets/calendar-2.png)
