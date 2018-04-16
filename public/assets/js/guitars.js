// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-strum").on("click", function(event) {
      var id = $(this).data("id");
      var newStrum = $(this).data("newstrum");
  
      var newStrumState = {
        strummed: newStrum
      };
  
      // Send the PUT request.
      $.ajax("/api/guitars/" + id, {
        type: "PUT",
        data: newStrumState
      }).then(
        function() {
          console.log("changed strum to", newStrum);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newGuitar = {
        guitar_name: $("#ca").val().trim(),
        strummed: false
      };
  
      // Send the POST request.
      $.ajax("/api/guitars", {
        type: "POST",
        data: newGuitar
      }).then(
        function() {
          console.log("created new guitar");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  