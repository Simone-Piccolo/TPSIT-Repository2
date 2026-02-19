const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Configurazione Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// ROUTE FORM
app.get("/post", (req, res) => {
  res.render("post");
});

// SALVATAGGIO POST
app.post("/post", upload.single("image"), (req, res) => {
  const filePath = path.join(__dirname, "post.json");

  let data = [];
  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  const newPost = {
    id: Date.now(),
    title: req.body.title,
    description: req.body.description,
    imageName: req.file.filename,
    imagePath: "/uploads/" + req.file.filename
  };

  data.push(newPost);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.redirect("/gallery");
});

// GALLERY IMMAGINI
app.get("/gallery", (req, res) => {
  const filePath = path.join(__dirname, "post.json");
  let data = [];

  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  res.render("gallery", { posts: data });
});

// GALLERY DETTAGLIATA
app.get("/postGallery", (req, res) => {
  const filePath = path.join(__dirname, "post.json");
  let data = [];

  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  res.render("postGallery", { posts: data });
});

// SINGOLO POST
app.get("/post/:id", (req, res) => {
  const filePath = path.join(__dirname, "post.json");
  let data = [];

  if (fs.existsSync(filePath)) {
    data = JSON.parse(fs.readFileSync(filePath));
  }

  const post = data.find(p => p.id == req.params.id);

  res.render("singlePost", { post });
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});

