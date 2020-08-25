const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  edit,
  remove,
};

function find() {
  return db("events");
}

function findById(id) {
  return db("events").where({ id }).first();
}

function insert(event) {
  const [newEvent] = db("events").insert(event, "*");
  return newEvent;
}
function edit(id, changes) {
  const [changed] = db("events").where({ id }).update(changes);
  return changed;
}
function remove(id) {
  return db("events").where({ id }).del();
}
