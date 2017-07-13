//a function that creates an object is basically a constructor function
//we use it with a new operator
//anything given to this is printed into watch
//variables that are not pre fixed with 'this' are local to just that function

function stopWatch(){

	var time=0;
	var interval;
	var offSet;   					//To calculate how much time is passed.

	function update() {				//Private Functions
		time += delta();
		var formattedTime = timeFormatter(time);
	}

	function delta() {

		var now = Date.now();
		var timePassed = now - offSet;
		offset = now;
		return timePassed;
	}

	function timeFormatter(timeInMilliseconds) {
		var time = new Date(timeInMilliseconds);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();
		if(minutes.length < 2){
			minutes = '0' + minutes;
		}

		if(seconds.length < 2){
			seconds = '0' + seconds;
		}

		while(milliseconds.length < 2){
			milliseconds = '0' + milliseconds;
		}

		return minutes + ":" + seconds + ":" + milliseconds;
	}

	this.isOn = false;  	        					//to check if stop watch is currently running  
														//(initializing it to false)


	this.start = function(){
		if(!this.isOn){
			interval = setInterval(update, 10);
			offSet = Date.now();
			this.isOn = true;  	        	

		}
	};


	this.stop = function(){
		clearInterval(interval);
		interval = null;
		this.isOn = false;
	};



	this.reset = function(){
		time = 0;
	};

}
var watch = new stopWatch(); 


								//when we use 'new' keyword with a function,
								// that function implicitly creates an empty object & returns 'this'.

