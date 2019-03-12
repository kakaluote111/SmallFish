var Ane = function(){
    this.num = 30;   //海葵数量
    this.width = 18; //海葵宽度
    this.x = [];     //每个海葵的起始X坐标
    this.len = [];   //每个海葵的高度

    this.initAne();  //初始化海葵
}

Ane.prototype.initAne = function () {

    for (let i=0;i<this.num;i++){
        this.x.push(i*20 + Math.floor(Math.random()*(5 - 1 + 1) + 1)); //[1 - 5] 返回任意范围的随机数Math.floor(Math.random()*(max-min+1)+min);
        this.len.push(Math.floor(Math.random()*6 + 30)); //[30 - 35]
    }
}

Ane.prototype.draw = function (){


    for(let i=0;i<this.num;i++){

        ctx2.strokeStyle = "#7F2BDD";
        ctx2.strokeRect(this.x[i],canHeight - this.len,this.x[i] + this.width,canHeight);

    }

}

