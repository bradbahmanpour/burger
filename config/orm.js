
var connection = require('./connection.js');
var mysql = require("mysql");

function insertOne() {
    console.log("Inserting a new Hamburger...\n");
    var query = connection.query(
      "INSERT INTO burgers SET ?",
      {
        burger_name: "",
        devoured: False
      },
      function(err, res) {
        console.log(res.affectedRows + " Hamburger inserted!\n");
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function updateOne() {
    console.log("Updating burgers table records...\n");
    var query = connection.query(
      "UPDATE burgers SET ? WHERE ?",
      [
        {
            burger_name: 100
        },
        {
            devoured: False
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " burgers updated!\n");
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  
  function selectAll() {
    console.log("Selecting all burgers...\n");
    connection.query("SELECT * FROM burgers", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }

  module.exports =  { 
      selectAll : SelectAll,
      updateOne : updateOne,
      insertOne : insertOne     
  };
  