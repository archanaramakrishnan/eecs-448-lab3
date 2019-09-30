var current;
var splitName;
var imageName;
var index;

function getCurrent() {
  //get name of current picture
  current = String(document.getElementById("currentImage").src);
  splitName=current.split("/");
  imageName = splitName[splitName.length - 1];

  //get index of the current picture
  index=Number(imageName.split(".")[0]);

}
function next() {
  //if index is less than 6, go to the next picture
  if(index<6)
  {
    index=index+1;
  }
  //if index is 6, go to the first picture
  else if(index==6)
  {
    index=1;
  }

  //display next image
  document.getElementById('currentImage').src= index + ".jpg";
}

function previous() {
  //if index is greater than 1, go to the previous picture
  if(index>1)
  {
    index=index-1;
  }
  //if index is 1, go to the last picture
  else if(index==1)
  {
    index=6;
  }
  //display next image
  document.getElementById('currentImage').src= index + ".jpg";
}
