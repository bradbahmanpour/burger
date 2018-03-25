// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("devoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed Devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

   // console.log("The new burger is = "+ $("#ca"));

    if ($("#ca").val().trim() == "") {
      alert("You need to Add a Burger Name before you can Submit!");
    } else {
      var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new Burger");
          // Reload the page to get the updated list
          location.reload();
        }
      ); 
    }  
  }); 

});