let theme = "light";

function imgSlider(anything) {
	document.querySelector('.starbucks').src= anything;
}
function changeCircleColor(color){
	document.documentElement.style.setProperty('--scolor', color);
}
function darkmode(){
	if(theme == "light"){
		document.documentElement.style.setProperty('--mcolor', '#0E110E');
		document.documentElement.style.setProperty('--tcolor', '#fff');
		theme = "dark";
	}else{
		document.documentElement.style.setProperty('--mcolor', '#fff');
		document.documentElement.style.setProperty('--tcolor', '#333');
		theme = "light";
	}
}