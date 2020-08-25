const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db("events");
}

function findById(id) {
  return db("events").where({ id }).first();
}

async function insert(event) {
  const [newEvent] = await db("events").insert(event, "*");
  return newEvent;
}

function remove(id) {
  return db("events").where({ id }).del();
}

async function update(id, changes) {
  const [newChange] = await db("events").where({ id }).update(changes, "*");
  return newChange;
}
