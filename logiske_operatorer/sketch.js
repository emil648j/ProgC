function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(220)
    let posx = mouseX
    let posy = mouseY
    let r = 10

    circle(posx, posy, r)
    line(250, 0, 250, 500)
    line(0, 250, 500, 250)
    strokeWeight(10)

    if (posx > 250) {
        circle(posx, posy, r * 2)
    }
    if (posy > 250) {
        circle(posx, posy, r * 2)
    }
    if (posy > 250 && posx > 250) {
        circle(posx, posy, r * 4)
    }
}