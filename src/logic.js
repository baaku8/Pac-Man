const canvas=document.querySelector('canvas');
// console.log(canvas);
const context=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

class Boundary{
    constructor({pos}){
        this.pos=pos;
        this.width=40;
        this.height=40;
    }
    draw(){
        context.fillStyle='blue';
        context.fillRect(this.pos.x,this.pos.y,this.width,this.height);
    }
}

const b1=new Boundary({pos:{
    x:0,
    y:0
}})
b1.draw();


