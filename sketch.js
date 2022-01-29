let debug = true;
let angle = 0


let mandalorian;

function preload() {
	mandalorian = loadModel("src/mandalorian-helmet.obj", true)
}

function setup() 
{
	createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
	background(0)
	let rotator = sin(angle)
	let rotInc = rotator * 10

	fill(170, 169, 173)
	noStroke()


	let lightX = -(mouseX-windowWidth/2)
	let lightY = -(mouseY-windowWidth/2)

	pointLight(0, 0, 20, windowWidth, 0, -1000)
	directionalLight(142, 136, 137, lightX, lightY, -400)

	camY = map(mouseY, 0, windowHeight, -100, 100)
	camera(sin(frameCount * 0.005) * 360, camY, 600, 0, 0, 0, 0, 1, 0)


	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {

			let posX = map(i, 0, 2, -windowWidth/3, windowWidth/3)
			let posZ = map(j, 0, 2, -windowWidth/3, windowWidth/3)
			
			push()
			translate(posX, 0, posZ)
			rotateX(PI)
			rotateY(PI + (PI/2))

			rotateY(rotInc + i * 10)

			specularMaterial(142, 136, 137)
			scale(0.7)
			model(mandalorian)
			pop()
		}
	}
	angle += 0.001
}


