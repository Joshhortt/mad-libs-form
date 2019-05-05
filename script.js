$(document).ready(function() {
  $("#blanks form").submit(function() {

// START REFACTOR CODE

// Only one General variable with an Array of all Inputs in strings.
    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
// add forEach() method to loop each array element
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });
    
// END REFACTOR CODE
    $("#story").show();

    event.preventDefault();
  });
});
