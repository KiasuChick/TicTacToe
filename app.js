window.onload = function(){
	var myDiv = document.getElementById("myDiv");

	var coolFunction = function(){ alert("WHAAAAAAT"); };
	myDiv.onclick = coolFunction;

	myDiv.onmouseover=function(){
		console.log("Mouseover!!!");
	};
	myDiv.onmouseout=function(){
		console.log("Mouseout!!!");
	};

var sequence=[9, 10, 6, 7, 3, 2, 1];
};