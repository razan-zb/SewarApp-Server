# SewarApp Server

This repository contains the server-side code for the **SewarApp**, an application designed to assist designers in managing their work and showcasing their portfolio to the public. The server handles all backend functionalities, including data storage, image and video management, and client data processing.

## Features

- **Designer Management**: Enables designers to manage their clients, appointments, and projects efficiently.
- **Public Page**: Displays the designer's portfolio (images and videos) for potential clients to view and interact with.
- **Data Handling**:
  - **Push/Pull Operations**: Handles requests to store, retrieve, and update client and project data.
  - **Image/Video Fetching**: Retrieves media files (images and videos) stored on Firebase.
- **Secure Data Management**: Uses MongoDB Atlas for storing and managing client and application data.

## Technologies Used

### Backend
- **Node.js**: For building a robust and scalable backend.
- **Express.js**: To handle HTTP requests and APIs.

### Database
- **MongoDB Atlas**: A cloud database used for storing client data and application-related records.

### Media Storage
- **Firebase**: Used for storing and retrieving images and videos.

### Authentication
- Future-proof design to support authentication systems for secure user access.

### Deployment
- Easily deployable on platforms such as Heroku, AWS, or any cloud-based server infrastructure.

## API Endpoints

The server provides a range of RESTful API endpoints to handle various functionalities:

- **Clients**:
  - `GET /clients`: Retrieve the list of clients.
  - `POST /clients`: Add a new client.
  - `PUT /clients/:id`: Update client details.
  - `DELETE /clients/:id`: Delete a client.

- **Portfolio**:
  - `GET /portfolio`: Fetch the designer's portfolio (images/videos).
  - `POST /portfolio`: Upload a new portfolio item.
  - `DELETE /portfolio/:id`: Remove a portfolio item.

- **Appointments**:
  - `GET /appointments`: Retrieve all appointments.
  - `POST /appointments`: Create a new appointment.

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/razan-zb/SewarApp-Server.git
   cd SewarApp-Server
