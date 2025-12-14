// routes.js
const DrinkController = require('./controllers/DrinkController');

module.exports = (app) => {
  // เชื่อม URL เข้ากับฟังก์ชันใน Controller
  app.get("/drinks", DrinkController.index); // Get All
  app.get('/drink/:id', DrinkController.show); // Get One
  app.post("/drink", DrinkController.create); // Create
  app.put("/drink/:id", DrinkController.update); // Update
  app.delete("/drink/:id", DrinkController.delete); // Delete
};
