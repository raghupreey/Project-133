img="";

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center()
}

function preload()
{
    img = loadImage('bed_room.jpeg');
}

function draw()
{
    image( img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 240, 125);
    noFill();
    stroke("#FF0000");
    rect(200, 100, 350, 640);

    fill("#FF0000");
    text("Fan", 290, 25);
    noFill();
    stroke("#FF0000");
    rect(280, 1, 160,90);

    
    fill("#FF0000");
    text("Plant", 225, 170);
    noFill();
    stroke("#FF0000");
    rect(220, 150, 80, 120);

    fill("#FF0000");
    text("Flower Vase", 90, 130);
    noFill();
    stroke("#FF0000");
    rect(80, 100, 80, 150);

    fill("#FF0000");
    text("Light", 560, 120);
    noFill();
    stroke("#FF0000");
    rect(555, 100, 80, 120);
    
}