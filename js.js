
$(document).ready(function(){
	$('#text > p').hide();
	$("#joinin").mouseover(function(){
		$("#text > p").fadeIn(2000);
	});
	$("#joinin").click(function(){
		alert("加入我们吧~！！");
	});
	$('a').click(function(){
		alert("大爷~别着急，还没做呢！");
	});
	$('#search').click(function(){
		alert("大爷~别着急，还没做呢！");
	});
});



/*
var beyond = {
	formedIn:'1983',
	foundedIn:'xianggang',
	artist:['huang','huang','huang','ye']
};
beyond['foundedIn'] = 'Ïã¸Û';

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

	/*
window.onload = function(){
	var glyphicon =  document.querySelector('.glyphicon');
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
	glyphicon.onmouseover = function(){
		console.log('who is upside?');
	}
	$('#joinin').bind('click',function(){
		alert('想加入就来找我们啊！！');
	});
}
	*/
