var submitForm = function () {
  //prevent reload


  //grab details from form
  var search = {
    talent: $("#talentSearch").val().trim(),
    date: $("#dateSearch").val().trim(),
    city: $("#citySearch").val().trim(),
    state: $("#stateSearch").val().trim(),
  };

  //retrieve search values from database
  

  //clear form
  $("#talentSearch").val("");
  $("#dateSearch").val("");
  $("#citySearch").val("");
  $("#stateSearch").val("");
}

//listener for the submit form button being clicked
$(".form_submit").on("click", function (event) {
  event.preventDefault();
  submitForm();
});
