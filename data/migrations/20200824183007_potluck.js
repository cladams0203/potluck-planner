exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("first_name").notNullable();
      tbl.string("last_name").notNullable();
      tbl.string("email").notNullable().unique();
      tbl.string("password");
      tbl.string("address_one");
      tbl.string("address_two");
      tbl.string("city");
      tbl.string("state");
      tbl.string("zip");
    })
    .createTable("events", (tbl) => {
      tbl.increments();
      tbl.string("date");
      tbl.string("event_title").notNullable();
      tbl.string("address_one");
      tbl.string("address_two");
      tbl.string("city");
      tbl.string("state");
      tbl.string("zip");
      tbl.string("contact_phone");
      tbl.string("start_time");
      tbl.string("end_time");
      tbl.text("special_instructions");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("guests", (tbl) => {
      tbl.increments();
      tbl.string("first_name").notNullable();
      tbl.string("email").notNullable();
      tbl.boolean("rsvp_pending").defaultTo(true);
      tbl.boolean("attending").defaultTo(false);
      tbl
        .integer("event_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("menu_items", (tbl) => {
      tbl.increments();
      tbl.string("item_name").notNullable();
      tbl
        .integer("event_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("guest_id")
        .unsigned()
        .references("id")
        .inTable("guests")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("menu_items")
    .dropTableIfExists("guests")
    .dropTableIfExists("events")
    .dropTableIfExists("users");
};
