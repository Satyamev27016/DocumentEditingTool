# Document Editing Tool

A collaborative document editing tool built with React.js, MongoDB, Quill, and Socket.io.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)      

## Overview

The Document Editing Tool is a web application that allows users to collaboratively edit text documents in real-time. It leverages React.js for the frontend, MongoDB for data storage, Quill as the rich text editor, and Socket.io for real-time communication.

## Features

- **Real-time collaboration:** Multiple users can edit a document simultaneously.
- **Rich text editing:** Utilizes the Quill editor for a user-friendly editing experience.
- **Persistent storage:** Documents are stored in MongoDB for easy retrieval and continued editing..

## Technologies Used

- [React.js](https://reactjs.org/): A JavaScript library for building user interfaces.
- [MongoDB](https://www.mongodb.com/): A NoSQL database for storing document data.
- [Quill](https://quilljs.com/): A powerful and customizable WYSIWYG editor for rich text.
- [Socket.io](https://socket.io/): A library for real-time web applications, enabling real-time collaboration.

## Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/document-editing-tool.git
   cd document-editing-tool
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and configure the following variables:
   ```
   REACT_APP_API_URL=YOUR_MONGODB_API_URL
   REACT_APP_SOCKET_URL=YOUR_SOCKET_IO_SERVER_URL
   ```

4. **Start the Application:**
   ```bash
   npm start
   ```

## Usage

1. Open the application in your web browser.
2. Create a new document or open an existing one.
3. Share the document link with collaborators.
4. Collaborate in real-time by making edits and seeing changes instantly.

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.
