var Admin = require('./app/models/admin');
var Customer = require('./app/models/customer');

var displayAdmins = function() {
  Admin.fetchAll().then(function(data) {
    console.log("There were " + data.length + " admins in the database.");
    data.forEach(function(admin) {
      attrs = admin.attributes;
      console.log([attrs.name, attrs.email].join(" - "));
    });
  });
};

var displayCustomers = function() {
  Customer.fetchAll().then(function(data) {
    console.log("There were " + data.length + " customers in the database.");
    data.forEach(function(customer) {
      attrs = customer.attributes;
      console.log([attrs.name, attrs.email].join(" - "));
    });
  });
};

displayAdmins();
console.log("--------------------------------");
displayCustomers();
