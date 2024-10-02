
# Book Tracker App

This is a MERN stack-based web application that allows users to track their reading progress. Users can enter books, update their reading progress, and view a progress bar to see how close they are to finishing each book.

## Features

- **Book Entry:** Users can add new books by providing the title, author, and the total number of pages.
- **Progress Tracking:** Users can update the number of pages they have read, and the app will display a progress bar to visualize reading completion.
- **Book List:** View a list of all entered books with the option to update progress or delete a book.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Deployment:** AWS Amplify and Route 53
- **API Integration:** Google Books API (optional)

## Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- MongoDB
- NPM or Yarn

### Installation

1. Clone the repository:
    \`\`\`bash
    git clone https://github.com/EvanMeyerEmich/book-tracker-app.git
    \`\`\`
2. Navigate into the project directory:
    \`\`\`bash
    cd book-tracker-app
    \`\`\`
3. Install dependencies for both frontend and backend:
    \`\`\`bash
    npm install
    cd client && npm install
    \`\`\`

### Running the App

1. Start the MongoDB server:
    \`\`\`bash
    mongod
    \`\`\`

2. Start the backend server:
    \`\`\`bash
    npm run server
    \`\`\`

3. Start the frontend React app:
    \`\`\`bash
    cd client && npm start
    \`\`\`

4. Open the app in your browser at `http://localhost:3000`.

### Environment Variables

Create a `.env` file in the root directory with the following variables:

\`\`\`
MONGO_URI=<your_mongodb_uri>
PORT=5000
\`\`\`

### Deployment

The app can be deployed using AWS Amplify and Route 53 for domain management. Please follow the AWS documentation for more details on deployment.

## Contributing

Feel free to fork this repository and create pull requests for any enhancements or bug fixes. Contributions are welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
