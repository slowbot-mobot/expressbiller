exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('admins').del(),
    knex('admins').insert({name: 'Jim OKelly'     , email: 'jim@example.com'})
  );
};
