exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('customers').del(),
    knex('customers').insert({name: 'John Lennon'    , email: 'john@example.com'}),
    knex('customers').insert({name: 'Noel Gallagher' , email: 'noel@example.com'})
  );
};
