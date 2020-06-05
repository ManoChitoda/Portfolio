const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const row = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup () {
	snake = new Snake();
	fruit = new Fruit();
	fruit.pickLocation();

	window.setInterval(() =>{
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.update();
		snake.draw();
		fruit.draw();
	},250);
}());

window.addEventListener('keydown', ((evt) => {
	const direction = evt.key.replace('Arrow','');
	snake.changeDirection(direction);
}));