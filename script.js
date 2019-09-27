//validates password by checking if they are equal
//makes alerts pop up based on:
  //if the passwords are less than 8 characters
  //or are not equal in both text boxes
function passwordValidation() {
  var p1 = document.getElementById("password1").value;
  var p2 = document.getElementById("password2").value;
  if(p1!=p2)
  {
    alert("The passwords entered don't match");
  }
  else if(p1.length<8)
  {
    alert("The passwords are not at least 8 characters long ");
  }
}
