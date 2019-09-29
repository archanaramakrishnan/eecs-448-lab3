function stylize() {
  //Access the tags:
  var borderR = document.getElementById("border-red").value;
  var borderG = document.getElementById("border-green").value;
  var borderB = document.getElementById("border-blue").value;
  var borderWidth = document.getElementById("border-width").value;

  var bgR = document.getElementById("bg-red").value;
  var bgG = document.getElementById("bg-green").value;
  var bgB = document.getElementById("bg-blue").value;

  //Change the style attributes
  document.getElementById("para").style.backgroundColor = 'rgb(' + bgR + ',' + bgG + ',' + bgB + ')';
  document.getElementById("para").style.border = borderWidth + ' solid '+ 'rgb(' + borderR + ',' + borderG + ',' + borderB + ')';
}
