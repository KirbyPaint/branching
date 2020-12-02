$(document).ready(function() {
  $("form#voting").submit(function(event) {
    const age = parseInt($("input#age").val());
    const citizen = $("select#citizen").val();
    const resident = $("select#resident").val();

    if (age) {
      if (citizen === "true" && resident === "true" && age >= 16) {
        $('#invalid').hide();
        $('#valid').show();
      }
      else {
        $('#valid').hide();
        $('#invalid').show();
      }
    } else {
      alert('Please enter your age.');
    }

    event.preventDefault();
  });
});