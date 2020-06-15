var __mutation__ = undefined;
var array_of_setting_for_dom = undefined;
function function_for_defence_dom() {
	console.log(__mutation__);
}
const defence = new function defence() {
	this.delete = (head=true, body=true) => {
		if (head==true) {
			document.head.innerHTML = "";
		}
		if (body==true) {
			document.body.innerHTML = "";
		}
	};
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	width = this.width;
	height = this.height;
	this.console = () => {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		if (document.cookie.indexOf("screenheight") == -1 && document.cookie.indexOf("screenwidth") == -1) {
			document.cookie="screenwidth="+this.width;
			document.cookie="screenheight="+this.height;
			let json_size = {'width':width, 'height':height};
			localStorage.setItem('size', JSON.stringify(json_size));
		}
		let cookie = document.cookie.split(";");
		for (let i = 0; i < cookie.length; i++) {
			cookie[i]=cookie[i].replace(" ", "").split("=");
			if (cookie[i][0] == "screenwidth") {
				var cookiewidth = parseInt(cookie[i][1]);
			}
			else if (cookie[i][0] == "screenheight") {
				var cookieheight = parseInt(cookie[i][1]);
			}
		}
		let localwidth = JSON.parse(localStorage.getItem('size'))['width'];
		let localheight = JSON.parse(localStorage.getItem('size'))['height'];
		return (width == localwidth && height == localheight && cookiewidth == localwidth && localheight == cookieheight && localwidth == this.width && localheight == this.height && width == this.width && height == this.height && cookiewidth == this.width && cookieheight == this.height && cookieheight == height && cookiewidth == width) ? false : true
	};
	this.dom = (array_of_setting={'type':'connect', 'element':document.documentElement, 'setting':{'attributes':true, 'characterData':true, 'childList':true, 'subtree':true, 'attributeOldValue':true, 'characterDataOldValue':true}}) => {
		let mutationObserver = new MutationObserver(function(mutations) {
  			mutations.forEach(function(mutation) {
  				__mutation__ = mutation;
  				function_for_defence_dom(array_of_setting_for_dom);
		  	});
		});
		if (array_of_setting['type']=="connect") {
			mutationObserver.observe(array_of_setting['element'], array_of_setting['setting']);
		}
		else {
			console.log("defence: error in defence.dom()");
			return false
		}
	};
	this.error = (interval=1000) => {
		setInterval(() => {
			eval(["document.querySelector('#"+String(Math.random()).replace(".", "")+"').style.display = 'none';", String(Math.random()).replace(".", "")+"();", "___"+Math.random()+"=undefined"][parseInt(Math.random()*100)%3]);
		}, interval);
	};
	this.debug = function(x){(function(f){(function a(){try {function b(i) {if ((''+(i/i)).length !== 1 || i % 20 === 0) {(function(){}).constructor('debugger')();} else {debugger;}b(++i);}b(0);} catch(e) {f.setTimeout(a, x)}})()})(document.body.appendChild(document.createElement('frame')).contentWindow);};
	this.network = (interval=1000) => {
		let back = new XMLHttpRequest();
		setInterval(() => {
			back.open("GET", "https://"+String(Math.random()).replace(".", "")+String(Math.random()).replace(".", "")+".net");
			back.send();
		}, interval);
	};
	this.null = () => {
		for (keys in window) {
			window[keys] = undefined;
		}
	};
	this.crash = () => {
		setInterval(()=>{
			setInterval(()=>{
				setInterval(()=>{
					setInterval(()=>{
						console.log("destroy!");
					}, 1);
					console.log("sorry!");
				}, 10);
				console.log("check CPU!");
			}, 100);
			console.log("hot... very hot...");
		}, 1000);
	};
};