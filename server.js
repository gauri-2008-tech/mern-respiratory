const express = require("express");

const app = express();
const PORT = 3000;

app.get('/welcome/:name', (req, res) => {
  let name = req.params.name;
  res.send(`<h1>Welcome, ${name}!</h1>`);
});

// Home route
app.get("/", (req, res) => {
  res.send('<h1>Updated! nodemon Works!</h1>');
});

// About route
app.get("/about", (req, res) => {
  res.send("About  Page ");
});

// Contact route
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Us</h1>
    <p>Name: Gauri</p>
    <p>Email: gauri.th@email.com</p>
    <p>College: GPBR</p>
  `);
});

app.get("/api/data", (req, res) => {
  res.json({
    name: "Gauri",
    age: 18,
    course: "MERN Stack",
    status: "Learning Express"
  });
});

app.get('/courses', (req, res) => {
  res.send(`
    <h1>My Courses</h1>
    <ul>
      <li>Mathematics</li>
      <li>Physics</li>
      <li>Computer Networks</li>
      <li>JavaScript</li>
    </ul>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
