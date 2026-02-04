This is a backend-only project built for the Backend Development Internship assignment.

It's a RESTful API for managing notes, but I focused on making it production-ready rather than just a basic CRUD app. It includes strict validation, "smart" updates to save database resources, and fuzzy search logic.

**\*** How to Run on Local Server **\***

1.  **Clone the repo**
    ```bash
    git clone https://github.com/Saurabh6386/Notes_API.git
    ```
2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Setup DataBase**

    Download and Install Mongodb on your PC if not installed as it is required to stored the notes and perform any kind of operation on it

    Edit the "connectDB.js" file in "config" folder and replace there mongoDB url with own.
    e.g = "mongodb://localhost:27017/notes_db" -> this is mine you also should have like this

    ```

    ```

4.  **Start the Server**
    ```bash
    npm run dev
    or
    npm start
    ```
    The server will run on `http://localhost:3000`.

**\*** API Endpoints **\***

1. POST /notes -> Create a new note
   EX : http://localhost:3000/notes

Request Body:

\*\*\*json
{
"title": " Meeting Notes ",
"content": "Discuss project roadmap"
}

2. GET /notes -> Get all notes exist in database
   Ex: http://localhost:3000/notes

3. GET /notes/search -> Get notes that matched the search in title or content
   Ex: http://localhost:3000/notes/search?q=meet

4. PUT /notes/:id -> update the notes with the id
   Ex: http://localhost:3000/notes/"{user_id_paste_here}"

Request Body:

\*\*\*json  
{
"title": "Updated Meeting Title"
}

```

```
