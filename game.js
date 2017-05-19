const field = new Image()
const music = new Audio("music.m4a")
const walksound = new Audio("walksound.m4a")

let isWalking = false

const face = {
    frame1: new Image(),
    frame2: new Image(),
    frame3: new Image(),
    frame4: new Image(),
    frame5: new Image(),
    x: 800,
    y: 700,

    facetime: 0,
    currentface: 1
}

function initialize() {
    field.src = "field.png"
    face.frame1.src = "face1.png"
    face.frame2.src = "face2.png"
    face.frame3.src = "face3.png"
    face.frame4.src = "face4.png"
    face.frame5.src = "face5.png"

    music.loop = true
    music.play()
}

function update(dt) {
    //Change faces every 1.5 seconds
    face.facetime += dt
    if (face.facetime >= 1500) {
        face.facetime -= 1500
        changeFace()
    }

    if (JSG.keyboard.keyList.includes(38)) {
        face.y -= 1.5

        if (face.y < 700)
            face.y = 700

        walksound.play()
    }
    if (JSG.keyboard.keyList.includes(40)) {
        face.y += 1.5

        if (face.y > 875)
            face.y = 875

        walksound.play()
    }
    if (JSG.keyboard.keyList.includes(37)) {
        face.x -= 3

        if (face.x < -30)
            face.x = -30

        walksound.play()
    }
    if (JSG.keyboard.keyList.includes(39)) {
        face.x += 3

        if (face.x > 1600)
            face.x = 1600

        walksound.play()
    }

}

function draw(rm) {
    JSG.context.drawImage(field, 0, 0)
    switch (face.currentface) {
        case 1:
            JSG.context.drawImage(face.frame1, face.x, face.y)
            break
        case 2:
            JSG.context.drawImage(face.frame2, face.x, face.y)
            break
        case 3:
            JSG.context.drawImage(face.frame3, face.x, face.y)
            break
        case 4:
            JSG.context.drawImage(face.frame4, face.x, face.y)
            break
        case 5:
            JSG.context.drawImage(face.frame5, face.x, face.y)
            break
        default:
            break
    }

}



function changeFace() {
    switch (face.currentface) {
        case 1:
            face.currentface = 2
            break
        case 2:
            face.currentface = 3
            break
        case 3:
            face.currentface = 4
            break
        case 4:
            face.currentface = 5
            break
        case 5:
            face.currentface = 1
            break
        default:
            break
    }

}