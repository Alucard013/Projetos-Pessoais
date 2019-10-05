let dino;
let dimg;
let timg;
let bimg;
let trains = [];

function preload(){
    dimg = loadImage('../Project/dino.gif');
    timg = loadImage('../Project/train.png');
    bimg = loadImage('../Project/background.png');

}

function setup(){
    createCanvas(800, 450);
    dino = new Dino();
    
}
function KeyPressed(){
    if( key == ' ' ){
        dino.jump();
    }
}

function draw(){
if(random(1) < 0.005 ){
    trains.push (new train())
}

    background(bimg);
    dino.show(); 
    dino.move();

    for (let t of trains ){
        t.move();
        t.show();
    }
}