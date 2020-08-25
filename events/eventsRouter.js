const router = require("express").Router();
const Events = require("./eventsModel");

router.get("/", (req, res) => {
  Events.find()
    .then((events) => {
      res.status(200).json(events);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get("/:id", (req, res) => {
  Events.findById(req.params.id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/", (req, res) => {
  Events.insert(req.body)
    .then((event) => {
      res.status(201).json(event);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Events.update(id, req.body)
    .then((event) => {
      res.status(203).json(event);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.delete("/:id", (req, res) => {
  Events.remove(req.params.id)
    .then((event) => {
      res.status(203).json(event);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
