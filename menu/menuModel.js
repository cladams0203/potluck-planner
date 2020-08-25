const db = require("../data/dbConfig");

module.exports = {
  find,
  findByEventId,
  findById,
  insert,
  edit,
  remove,
};

function find() {
  return db("menu_items");
}
function findById(id) {
  return db("menu_items").where({ id }).first();
}
function findByEventId(event_id) {
  return db("menu_items").where({ event_id });
}
async function insert(menuItem) {
  const [newItem] = await db("menu_items").insert(menuItem, "*");
  return newItem;
}
async function edit(id, changes) {
  const [changed] = await db("menu_items").where({ id }).update(changes, "*");
  return changed;
}
function remove(id) {
  return db("menu_items").where({ id }).del();
}
