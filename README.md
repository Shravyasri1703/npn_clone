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

   Navigate to the project directory and install the necessary dependencies:

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