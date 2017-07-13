var timer = document.getElementById('timer');
var togglebtn = document.getElementById('toggle');
var resetbtn = document.getElementById('reset');
var watch = new stopWatch(timer);

togglebtn.addEventListener('click', function(){
	if(watch.isOn){
		watch.stop();
		togglebtn.textContent = 'start';
	}
	else{
		watch.start();
		togglebtn.textContent = 'stop';

	}
});

resetbtn.addEventListener('click', function(){
	watch.reset();
});

console.log('hello');


