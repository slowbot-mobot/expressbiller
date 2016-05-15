(function() {
  var createTable = function(knex) {
    return knex.schema.createTable('customers', function(table) {

      table.increments('id').primary();
      table.string('name');
      table.string('email');
      table.timestamp('created_at')
          .notNullable()
          .defaultTo(knex.raw('now()'));
      table.timestamp('updated_at')
          .notNullable()
          .defaultTo(knex.raw('now()'));
    });
  };

  var dropTable = function(knex) {
    return knex.schema.dropTable('customers');
  };

  module.exports.up = function(knex, Promise) {
    return Promise.all([createTable(knex)]);
  };

  module.exports.down = function(knex, Promise) {
    return Promise.all([dropTable(knex)]);
  };
}());
