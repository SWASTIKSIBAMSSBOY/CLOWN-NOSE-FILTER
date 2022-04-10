noseX=0;
noseY=0;

function preload(){
	clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
	canvas = createCanvas(300, 330);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(300, 300);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	window.alert("Posenet is intialized");
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x-15;
		noseY = results[0].pose.nose.y-15;
	}
}

function draw() {
	image(video, 0, 0, 300, 330);
	image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
	save('clown_nose_filter.png');
}

function nose_filter()
{
	window.alert("YOU CAN CLICK ON TAKE SNAPSHOT TO SAVE YOUR IMAGE");
	console.log("YOU CAN CLICK ON TAKE SNAPSHOT TO SAVE YOUR IMAGE");
}

