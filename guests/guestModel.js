const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findByEventId,
  findByEmail,
  insert,
  edit,
  remove,
};
function find() {
  return db("guests");
}
function findById(id) {
  return db("guests").where({ id }).first();
}
function findByEventId(event_id) {
  return db("guests").where({ event_id });
}
function findByEmail(email) {
  return db("guests").where({ email: email }).first();
}
async function insert(newGuest) {
  const [guest] = await db("guests").insert(newGuest, "*");
  return guest;
}
async function edit(id, changes) {
  console.log(id, changes);
  const [updated] = await db("guests").where({ id }).update(changes, "*");
  return updated;
}
function remove(id) {
  return db("guests").where({ id }).del();
}
