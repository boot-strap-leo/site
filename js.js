
/*
var beyond = {
	formedIn:'1983',
	foundedIn:'xianggang',
	artist:['huang','huang','huang','ye']
};
beyond['foundedIn'] = 'œ„∏€';

beyond.show = function(){
	for(var i=0;i<this.artist.length;i++)
		document.writeln(this.artist[i]);
};

beyond.show();

var property;
for(property in beyond){
	if(typeof beyond[property] !== 'function')
	console.log(beyond[property]);
}
*/

//console.log(beyond);
window.onload = function(){
	var glyphicon =  document.querySelector('.glyphicon');
	/*
	function showMessage(event){
		console.log(event);
	}
	btn.addEventListener('click',showMessage,false);
	glyphicon.onclick = function(){
		console.log('clicked!');
	}
	btn.onmouseout = function(){
		console.log('left');
	}
	*/
	glyphicon.onmouseover = function(){
		console.log('who is upside?');
	}
}