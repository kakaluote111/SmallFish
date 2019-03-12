var Background = function (){
	this.image = new Image();
    this.image.src = "./res/background.jpg";
}

Background.prototype.draw = function(){
	ctx2.drawImage(this.image,0,0,canWidth,canHeight);
}