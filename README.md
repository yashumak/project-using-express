# ✨Pinterest Clone and File Organizer

This repository contains two projects:

1. **Pinterest Clone**: A web application that mimics the functionality of Pinterest, built using Node.js, Express, MongoDB, and EJS.
2. **File Organizer**: A utility script to organize files into folders based on their extensions.

---

## 📂Pinterest Clone

### 🚀Features

- User authentication using Passport.js.
- Profile management with image upload.
- Create, view, and manage posts.
- Feed to display all posts.
- Responsive design using TailwindCSS.

### ⚙️Folder Structure

```bash
Pinterest/
 ├── app.js
 ├── package.json
 ├── bin/
 ├── public/
 │ ├── images/
 │ ├── javascripts/
 │ └── stylesheets/
 ├── routes/
 ├── views/
 │ ├── partials/
 │ ├── add.ejs
 │ ├── feed.ejs
 │ ├── index.ejs
 │ ├── profile.ejs
 │ ├── register.ejs
   └── show.ejs
```

### 📜Installation

1. Clone the repository

   ```bash
    git clone https://github.com/yashumak/project-using-express.git
   ```

2. Navigate to the `Pinterest` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start server

   ```bash
    npm start
   ```

5.Open your browser and navigate to

```bash
   http://localhost:3000
```

### 🙈Dependencies

- Node.js
- Express
- MongoDB
- Passport.js
- Multer
- EJS


## 📂File Organizer

### 🚀Features

- Organizes files into folders based on their extensions.
- Automatically creates folders if they don't exist.

### ⚙️Folder Structure

```bash
Arrange_File/
├── eslint.config.js
├── index.js
├── package.json
├── tailwind.config.js
├── vite.config.js
├── gitignore/
├── html/
├── m4a/
├── md/
├── mp3/
├── mp4/
├── png/
```

### 📜Usage

- Navigate to the Arrange_File folder.
- Update the basepath variable in index.js to the directory you want to organize.
- Run the script:
  `node index.js`

#### 🙈Dependencies

- Node.js
- TailwindCSS (for styling in related projects)

## 🖇️ Social Links

**Yash Umak**

- LinkedIn: [@yash-umak](https://www.linkedin.com/in/yash-umak-5242ab320/)
- GitHub: [@yashumak](https://github.com/yashumak)

### 🪪License

This project is licensed under the MIT License.
