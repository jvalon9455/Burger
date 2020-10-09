// * Import (require) `connection.js` into `orm.js`
var connection = require("./connection");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
const orm = {
    selectAll: function(){

    },
    insertOne: function(){

    },
    updateOne: function(){

    },
}
//      * `insertOne()`
//      * `updateOne()`

// * Export the ORM object in `module.exports`.
module.exports = orm;