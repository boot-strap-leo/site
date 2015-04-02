
$(document).ready(function(){
	$("#wiki").click(function(){
		window.open ("http://en.wikipedia.org/wiki/Hacker_(hobbyist)");
	});
	$('a:not(".signed")').click(function(){
		alert("大爷~别着急，还没做呢！");
	});
	$('#search').click(function(){
		alert("大爷~别着急，还没做呢！");
	});
	var pics=document.getElementById("pics");
	function pic_init(){
		var mybutton=document.getElementById("button1");;
		mybutton.setAttribute("class","btn btn-default");
		mybutton=document.getElementById("button2");;
		mybutton.setAttribute("class","btn btn-default");
		mybutton=document.getElementById("button3");;
		mybutton.setAttribute("class","btn btn-default");
		mybutton=document.getElementById("button4");;
		mybutton.setAttribute("class","btn btn-default");
		mybutton=document.getElementById("button5");;
		mybutton.setAttribute("class","btn btn-default");
		mybutton=document.getElementById("button6");;
		mybutton.setAttribute("class","btn btn-default");
		mybutton=document.getElementById("button7");;
		mybutton.setAttribute("class","btn btn-default");
	}
	$('#button1').click(function(){
		pic_init();
		pics.setAttribute("src","image/1.jpg");
		var mybutton=document.getElementById("button1");;
		mybutton.setAttribute("class","btn btn-default  active");
	});
	$('#button2').click(function(){
		pic_init();
		pics.setAttribute("src","image/2.jpg");
		var mybutton=document.getElementById("button2");;
		mybutton.setAttribute("class","btn btn-default  active");
	});
	$('#button3').click(function(){
		pic_init();
		pics.setAttribute("src","image/3.jpg");
		var mybutton=document.getElementById("button3");;
		mybutton.setAttribute("class","btn btn-default  active");
	});
	$('#button4').click(function(){
		pic_init();
		pics.setAttribute("src","image/4.jpg");
		var mybutton=document.getElementById("button4");;
		mybutton.setAttribute("class","btn btn-default  active");
	});
	$('#button5').click(function(){
		pic_init();
		pics.setAttribute("src","image/5.jpg");
		var mybutton=document.getElementById("button5");;
		mybutton.setAttribute("class","btn btn-default  active");
	});
	$('#button6').click(function(){
		pic_init();
		pics.setAttribute("src","image/6.jpg");
		var mybutton=document.getElementById("button6");;
		mybutton.setAttribute("class","btn btn-default  active");
	});
	$('#button7').click(function(){
		pic_init();
		pics.setAttribute("src","image/7.jpg");
		var mybutton=document.getElementById("button7");;
		mybutton.setAttribute("class","btn btn-default  active");
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
