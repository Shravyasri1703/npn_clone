# npm_clone

A clone of the npmjs website built using Vite, React, and Tailwind CSS. This project includes features for searching npm packages, viewing package details, and exploring specific package versions.

## Features

- **Search NPM Packages**: Users can search for npm packages using a search bar.
- **NPM Package Detail Page**: View detailed information about a selected package, including description, keywords, publisher info, and version.
- **Package Specific Version Page**: Explore details for specific versions of the package.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For a fast and efficient development environment.
- **Tailwind CSS**: For styling and responsive design.
- **Axios (or Fetch)**: For making API calls to retrieve package data.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/) (optional, for cloning the repo)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/YOUR_USERNAME/npm_clone.git
   cd npm_clone
   ```

2. **Install Dependencies**:

   ```bash
     npm install
   ```

3. **Start the development server**:

  ```bash
   npm run dev
   ```

4. **Open the Application**:

  Open your browser and go to http://localhost:3000 (or the port specified in your terminal) to view the application.

5. **API Endpoints**
The application uses the following API endpoints to fetch data:

Search Packages:

Endpoint: https://api.npmjs.org/v2/search
Method: GET
Query Parameter: text (the search term)
Package Detail:

Endpoint: https://api.npmjs.org/v2/package/:name
Method: GET
Path Parameter: name (the name of the npm package)
Package Version:

Endpoint: https://api.npmjs.org/v2/package/:name/versions/:version
Method: GET
Path Parameters:
name (the name of the npm package)
version (the specific version of the package)

### Screenshots  

![Screenshot 2024-09-21 222817](https://github.com/user-attachments/assets/f06db1ef-42bf-4670-a838-523ba744e0c6)
![Screenshot 2024-09-21 222838](https://github.com/user-attachments/assets/245af43d-d8d4-4762-a6d7-ff05423c4db9)
![Screenshot 2024-09-21 222855](https://github.com/user-attachments/assets/4c49a11e-3ffa-465b-b60a-f344b9ca2d74)
![Screenshot 2024-09-21 222906](https://github.com/user-attachments/assets/7f8233e8-403d-4010-9692-f274c2890b34)
![Screenshot 2024-09-21 222921](https://github.com/user-attachments/assets/b6644cb0-cd8a-416a-96be-cf4f8bb2cbca)
![Screenshot 2024-09-21 223047](https://github.com/user-attachments/assets/d31b7381-28c6-431f-9231-d448bd2bec46)
