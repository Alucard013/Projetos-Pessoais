class train {
constructor(){
    this.r = 100;
    this.x = width;
    this.y = Height - this.r;
}
move(){
    this.x -= 16;
}

show(){
    Image(timg, this.x, this.y, this.r, this.r);
}
}