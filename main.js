noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/TPTvd3kg/image.png');
    clown_hair = loadImage('https://i.postimg.cc/PxmsnNGG/Clown-Hair-1000x500.webp');
    clown_tie = loadImage('https://i.postimg.cc/9FzVgdmK/d4c5605dabd61ca3c5eaaf942febdc5a.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
   console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX-50, noseY-50, 100, 100);
    image(clown_hair, noseX-100, noseY-125, 200, 100);
    image(clown_tie, noseX-50, noseY+80, 100, 100);
}

function take_snapshot(){
    save('myFilterImage.png');
}

