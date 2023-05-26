shapes = ["square","circle","triangle","oval","rectangle","heart"];
Score = 0;
onetosix = Math.random(6);
provided = shapes[onetosix];
console.log(provided);
document.getElementById('p3').innerHTML = provided;

function preload()
{
mrdata = ml5.imageClassifier('DoodleNet');
}

function setup()
{
    canvas = createCanvas (280,280);
    canvas.position(500,195);
    canvas.mouseReleased(classifyCanvas);
}

function clearCanvas()
{
 r = random(255);
 g = random(255); 
 b = random(255);
 background(r,g,b);

}

function draw()
{
    stroke("black");
    strokeWeight (5);
    if (mouseIsPressed)
     {
        line(pmouseX, pmouseY, mouseX, mouseY);
     }
     check();
    }

function gotResult(error,results)
{
if (error)
{
    console.log(error);
}
else 
{
    console.log(results);
} 
}

data = results[0].label;

function check()
{
if (data == provided)
{
    Score = Score+1; 
    document.getElementById("score").innerHTML=Score;
}
}

function updateCanvas()
{
    r = random(255);
    g = random(255); 
    b = random(255);
    background(r,g,b);
    onetosix = Math.random(6);
    provided = shapes[onetosix];
    console.log(provided);
    document.getElementById('p3').innerHTML = provided;
}

function classifyCanvas()
{
    mrdata.classify(canvas, gotResult);
}