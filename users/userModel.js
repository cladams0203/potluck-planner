const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findByEmail,
  insert,
  edit,
  remove,
};

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where({ id }).first();
}
function findByEmail(email) {
  return db("users").where({ email }).first();
}
async function insert(user) {
  const [newUser] = await db("users").insert(user, "*");
  return newUser;
}

async function edit(id, changes) {
  const [changed] = db("users").where({ id }).update(changes, "*");
  return changed;
}
function remove(id) {
  return db("users").where({ id }).del();
}
