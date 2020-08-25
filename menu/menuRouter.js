const router = require("express").Router();
const Menu = require("./menuModel");

router.get("/", (req, res) => {
  Menu.find()
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get("/:id", (req, res) => {
  Menu.findById(req.params.id)
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.get("/event/:id", (req, res) => {
  Menu.findByEventId(req.params.id)
    .then((menu) => res.status(200).json(menu))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.post("/", (req, res) => {
  Menu.insert(req.body)
    .then((menu) => res.status(201).json(menu))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  Menu.edit(id, req.body)
    .then((menu) => res.status(203).json(menu))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.delete("/:id", (req, res) => {
  Menu.remove(req.params.id)
    .then((menu) => res.status(201).json(menu))
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
