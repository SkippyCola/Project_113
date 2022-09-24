function preload()
{}

function setup()
{
    canvas = createCanvas(600,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}


function draw()
{

    image(video,100,70,400,300);

    fill(0,255,0);

    stroke(0,255,0);

    rect(50,30, 520,20); 

    rect(50,390,520,20); 

    rect(20,50,20,370); 

    rect(550,50,20,370); 




    fill(255,0,0);

    stroke(255,0,0);

    circle(30,40,60);

    circle(560,40,60);

    circle(30,400,60);

    circle(560,400,60);

}
function take_snapshot()
{
    save('you.png');
}