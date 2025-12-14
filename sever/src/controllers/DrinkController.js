// controllers/DrinkController.js

// สมมติข้อมูล (ถ้าคุณใช้ DB ให้เปลี่ยนตรงนี้เป็นเรียก DB)
const drinks = [
  { id: 1, name: "Espresso", price: 40 },
  { id: 2, name: "Latte", price: 50 },
];

module.exports = {
  // 1. Get All (index)
  index: (req, res) => {
    res.json(drinks);
  },

  // 2. Get One (show) -> ที่เราเพิ่งแก้ปัญหาไป
  show: (req, res) => {
    console.log("มาที่ show แล้วนะ ID คือ " + req.params.id);
    const id = req.params.id;
    res.send("Get One ID: " + id);
    // const id = parseInt(req.params.id);
    const drink = drinks.find((d) => d.id === id);
    if (drink) {
      res.json(drink);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  },

  // 3. Create (create)
  create: (req, res) => {
    // logic การสร้าง...
    res.send("Create drink logic here");
  },

  // 4. Update (update)
  update: (req, res) => {
    // logic การแก้ไข...
    res.send("Update drink id: " + req.params.id);
  },

  // 5. Delete (delete)
  delete: (req, res) => {
    // logic การลบ...
    res.send("Delete drink id: " + req.params.id);
  },
};
