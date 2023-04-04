# Note Collection MERN stack app

Click [Here](https://note-collection-mern.herokuapp.com/) to view the website.

Note collection is one safe place for keeping your notes in one place

## Key features

- MERN authentication

You can create your account. Your data will be shown after you login.

- JWT verification

Only authorized user will be able to create, update, delete his/her personal data and notes

- State management and Persistency

State is managed by redux-toolkit. UserApi calls are made by CreateAsyncThunk and for caching NotesAPi calls are done by RTK-query.

- Custom Middleware

Not found and Error handling middleware is used to simplify the error handling.

- Profile Update

Users have the ablility to update their profile, update their image. Cloudinary is used as image hosting service

- Markdown text

To make users post formatted and look cleaner markdown text is used with live preview functionality.

## Installing dependencies

`npm install` in root directory for backend and also do the same in frontend directoty

## Run on localhost

`npm run build` in the frontend directory and then `npm start` from the root directory to run the project and it will run on localhost:5000.
