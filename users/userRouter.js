const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { generateToken, validateToken } = require("../middleware");

const Users = require("./userModel");
const Guest = require("../guests/guestModel");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      delete user.password;
      res.status(200).json(user);
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/register", (req, res) => {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 4);
  return Users.insert(user)
    .then((newUser) => {
      delete newUser.password;
      const token = generateToken(newUser);
      Guest.findByEmail(newUser.email).then((guest) => {
        console.log(guest);
        if (guest.length > 0) {
          guest.forEach((item) => {
            Guest.edit(item.id, { user_id: newUser.id });
          });
        }
      });
      res.status(201).json({
        message: "successfully registered user",
        token,
        user: newUser,
      });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  !email || !password
    ? res.status(403).json({ message: "please provide an email and password" })
    : Users.findByEmail(email)
        .then((user) => {
          if (user && bcrypt.compareSync(password, user.password)) {
            delete user.password;
            const token = generateToken(user);
            res.status(200).json({ token, user });
          }
        })
        .catch((err) => res.status(500).json({ message: err.message }));
});

module.exports = router;
