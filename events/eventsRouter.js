const router = require("express").Router();
const Events = require("./eventsModel");
const User = require("../users/userModel");
const Menu = require("../menu/menuModel");
const guests = require("../guests/guestModel");

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
      User.findById(event.user_id).then((user) => {
        const addUser = {
          ...event,
          host: {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
          },
        };
        Menu.findByEventId(event.id).then((menu) => {
          const addMenu = { ...addUser, menu_items: menu };
          guests.findByEventId(event.id).then((guest) => {
            const addGuest = { ...addMenu, guests: guest };
            res.status(200).json(addGuest);
          });
        });
      });
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
// router.get("/user/:id", (req, res) => {
//   console.log(req.params.id);
//   guests
//     .findByUserId(req.params.id)
//     .then((list) => {
//       console.log(list);
//       const newEvent = [];
//       list.forEach((item) => {
//         Events.findById(item.event_id)
//           .then((event) => {
//             console.log(event);
//             newEvent.push(event);
//           })
//           .catch((err) => console.log(err));
//       });
//       // res.status(200).json(newEvent);
//       console.log(newEvent);
//     })
//     .catch((err) => console.log(err));
// });

module.exports = router;
