const drinks = [
  { id: 1, name: "Espresso", price: 40 },
  { id: 2, name: "Latte", price: 50 },
];

module.exports = {
  index: (req, res) => {
    res.json(drinks);
  },

  show: (req, res) => {
    console.log("มาที่ show แล้วนะ ID คือ " + req.params.id);
    const id = req.params.id;
    res.send("Get One ID: " + id);
    const drink = drinks.find((d) => d.id === id);
    if (drink) {
      res.json(drink);
    } else {
      res.status(404).json({ message: "Not found" });
    }
  },

  create: (req, res) => {
    res.send("Create drink logic here");
  },

  update: (req, res) => {
    res.send("Update drink id: " + req.params.id);
  },

  delete: (req, res) => {
    res.send("Delete drink id: " + req.params.id);
  },
};
