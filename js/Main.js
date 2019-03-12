document.body.onload = main;

//canvas对象
var can1;
var can2;

//canvas 上下文对象
var ctx1;
var ctx2;

//canvas宽高
var canWidth;
var canHeight;

var lastTime; //每帧结束时间
var deltaTime; //每帧之间的时间差

//背景
var bg;
var ane;
/**
 * 入口函数
 */
function main(){
	init();

    lastTime = Date.now();
	deltaTime = 0;
    // gameloop();
}


function eat(x,y){   
  console.log(x+y);   
}   
function drink(x,y){   
  console.log(x-y);   
}   
eat.call(drink,3,2);

/**
 * 初始化函数
 */
function init(){

	can1 = document.getElementById("canvas1");
	can2 = document.getElementById("canvas2");

	ctx1 = can1.getContext("2d");
	ctx2 = can2.getContext("2d");

	canWidth = can1.width;
	canHeight = can1.height;

    bg = new Background();
    ane = new Ane();

}

function gameloop(){


    bg.draw();
    ane.draw();

	requestAnimFrame(gameloop);

	let now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;

}

