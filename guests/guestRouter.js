const router = require("express").Router();
const Guest = require("./guestModel");

router.get("/", (req, res) => {
  Guest.find()
    .then((guest) => res.status(200).json(guest))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.get("/:id", (req, res) => {
  Guest.findById(req.params.id)
    .then((guest) => res.status(200).json(guest))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.get("/user/email", (req, res) => {
  Guest.findByEmail(req.body.email)
    .then((guest) => res.status(200).json(guest))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.get("/event/:id", (req, res) => {
  Guest.findByEventId(req.params.id)
    .then((guest) => res.status(200).json(guest))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.post("/", (req, res) => {
  Guest.insert(req.body)
    .then((guest) => res.status(200).json(guest))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  Guest.edit(id, req.body)
    .then((guest) => res.status(200).json(guest))
    .catch((err) => res.status(500).json({ message: err.message }));
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Guest.remove(id)
    .then((guest) => res.status(200).json(guest))
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
