const words = ["right", "array", "value", "spice", "about", "monke", "thumb", "poopy"];
var answer,shuword;

function generateWords() {
	var s = words[Math.floor(Math.random() * words.length)];
	answer = s;
	s = shuffle(s);
	shuword = s;
    generateBoxes();
}

function generateBoxes(){
	for (var i = 0; i <= 4; i++) {
		var answerInput = '<input type="text"  id="input'+i+'"/>';
		var wong = '<button id="wrong'+i+'" onclick = "wordCheck(this.id)">'+shuword[i]+'</button>';
		document.getElementById('answerBox').innerHTML += answerInput;
		document.getElementById('wrongBox').innerHTML += wong;
		document.getElementById('input'+i).disabled = true; 
	}
}

function shuffle(s) {
  var arr = s.split('');
  
  arr.sort(function() {
    return 0.5 - Math.random();
  });  
  s = arr.join('');
  return s;
}

window.onload = generateWords;

var inputcount = 0;

function wordCheck(id){
	if(inputcount < 4){
		if(document.getElementById(id).innerHTML == answer[inputcount]){
			document.getElementById("input"+inputcount).value = document.getElementById(id).innerHTML;
			document.getElementById(id).disabled = true;
			inputcount++;
		}else{
			alert("wrong");
		}
	}else{
		document.getElementById("input"+inputcount).value = document.getElementById(id).innerHTML;
		document.getElementById(id).disabled = true;
		setTimeout(function(){ 
			alert("You Won");
			setTimeout(function(){ location.reload(); }, 2000);
		 }, 500);
	}	
}