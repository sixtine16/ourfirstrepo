getStylesheet();

function getStylesheet() {
      var currentTime = new Date().getHours();
      if (0 <= currentTime&&currentTime < 20) {
      $('#breakfast').show();
      }
      if (20 <= currentTime&&currentTime < 21) {
      $('#lunch').show();
      }
      if (16 <= currentTime&&currentTime < 24) {
      console.log("Siamo di sera");
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
