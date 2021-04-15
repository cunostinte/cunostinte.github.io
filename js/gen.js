x=1;
var toReturn = [];
function generare() {
	var len = parseInt(document.getElementById("m").value);
	var max = parseInt(document.getElementById("n").value);
	min = 1;
    var tempObj = {},
        i = 1;

      for(; i <= len; i++) {
        var randomInt = Math.floor(Math.random() * (max-min+1) + min);

        if(tempObj['key_'+ randomInt] === undefined) {
          tempObj['key_'+ randomInt] = randomInt;
          toReturn.push(randomInt);
        } else {
          i--;
        }
      }
	  document.getElementById("demo").innerHTML +="Ați generat rezultatele" + " #"+x+"<br>";
	  x++;
	  for(let i= 0; i < toReturn.length; i++) {
	  	document.getElementById("demo").innerHTML +="Premiul "+(i+1)+" — " + toReturn[i] + "<br>";

}
document.getElementById("demo").innerHTML +="<hr>" + "<br>";
toReturn = [];
	document.getElementById("cont").style.visibility = "visible";
}
function hide(){
	document.getElementById("cont").style.visibility = "hidden";
}
