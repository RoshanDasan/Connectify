Project Name: Connectify
Overview

This project is a social media application built using the MERN stack (MongoDB, Express, React, Node.js) and TypeScript. It follows the principles of clean architecture on the backend and utilizes Vite for fast and clean code on the frontend.
Features

   User registration and authentication
    Create, edit, and delete posts
    Like and comment on posts
    User profile management
    Follow and unfollow users
    Real-time updates using WebSockets

Tech Stack
Backend

   Node.js
    Express.js
    MongoDB
    TypeScript
    Clean Architecture

Frontend

   React
    Vite
    TypeScript
    HTML
    CSS (or any preferred CSS-in-JS solution)
    Axios (for API calls)
    React Router (for client-side routing)
    React Query (for data fetching and caching)
    Socket.io (for real-time updates)

Getting Started
Prerequisites

   Node.js 
    MongoDB 
    Git

Installation

    Clone the repository:

bash

git clone 

    https://github.com/RoshanDasan/Connectify.git

   Navigate to the project directory:

bash

   cd your-repo

   Install dependencies for the backend:
    

bash

    cd server
    npm install

   Install dependencies for the frontend:

bash

    cd client
    npm install

Configuration

   Backend:

   Create a .env file in the backend directory and provide the required environment variables, such as:

  bash

    PORT=3000
    MONGO_URI=mongodb://localhost:27017/social_media
    JWT_SECRET=your_jwt_secret

Frontend:

  Create a .env file in the frontend directory and provide the required environment variables, such as:

bash

        VITE_API_BASE_URL=http://localhost:3000/api

Usage

   Start the backend server:

bash

    cd server
    npm run start

   Start the frontend development server:

bash

    cd client
    npm run dev

   Open your browser and navigate 
   
     http://localhost:5173

Deployment

To deploy the application to a production environment, follow the instructions specific to your hosting provider or platform. Ensure that you set the necessary environment variables in the production environment.
Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
License

This project is licensed under the MIT License.