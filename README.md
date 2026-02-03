This is a backend-only project built for the Backend Development Internship assignment.

It's a RESTful API for managing notes, but I focused on making it production-ready rather than just a basic CRUD app. It includes strict validation, "smart" updates to save database resources, and fuzzy search logic.

***** How to Run on Local Server *****

1.  **Clone the repo**
    ```bash
    git clone <YOUR_REPO_LINK_HERE>
    cd <YOUR_FOLDER_NAME>
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Environment**
    Create a `.env` file in the root directory and add your MongoDB connection string.
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=3000
    ```

4.  **Start the Server**
    ```bash
    npm start
    ```
    The server will run on `http://localhost:3000`.

---

## 📡 API Endpoints

### 1. Create a Note
**POST** `/notes`
Creates a new note. Title and Content are required.
* *Note: Inputs are automatically trimmed.*

**Body:**
```json
{
  "title": "Project Idea",
  "content": "Build a backend API with Node.js"
}