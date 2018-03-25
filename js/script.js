getStylesheet();

function getStylesheet() {
      // var currentTime = new Date().getHours();
      var currentTime = 7;
      console.log("time in hours: " + currentTime)

      if ((0 <= currentTime) && (currentTime < 4)) {
        $('#hangoverSnack').show();
        $('#hangoverSnack-button').show();
        console.log("hangover time")

      } else if ((4 <= currentTime) && (currentTime < 12)) {
        $('#breakfast').show();
        $('#breakfast-button').show();
        console.log("breakfast time")

      } else if (( 12 <= currentTime) && (currentTime < 17)) {
        $('#lunch').show();
        $('#lunch-button').show();
        console.log("lunch time")

      } else {
        $('#dinner').show();
        $('#dinner-button').show();
        console.log("dinner time")
      }
}

$("#button1").click(function() {
    alert("The button1 was clicked.");
});

$("#button2").click(function() {
    alert("The button2 was clicked.");
});

$("#button3").click(function() {
    alert("The button3 was clicked.");
});

$("#button4").click(function() {
    alert("The button4 was clicked.");
});

$("#button5").click(function() {
    alert("The button5 was clicked.");
});
