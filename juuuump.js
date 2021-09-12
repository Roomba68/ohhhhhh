const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');

const ballRadius = 30;

let randomColor = "#";
for(let i = 0; i < 6; i++) {
    randomColor += (16*Math.random() | 0).toString(16);
}

ctx.lineWidth = 3;

let x = canvas.width/2;
let y = canvas.height-30;

let aaa = -4
let bbb = -4


const drawBall = () => {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.strokeStyle = randomColor
    ctx.stroke();
    ctx.closePath();
}

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

     if (x + aaa > canvas.width - ballRadius || x + aaa < ballRadius) {
        aaa = -aaa;
     randomColor = "#";
        for(let i = 0; i < 6; i++) {
            randomColor += (16*Math.random() | 0).toString(16);
        }
    }

    if (y + bbb > canvas.height - ballRadius || y + bbb < ballRadius) {
        bbb = -bbb;
         randomColor = "#";
        for(let i = 0; i < 6; i++) {
            randomColor += (16*Math.random() | 0).toString(16);
        }
    }
    
    x += aaa;
    y += bbb;
    drawBall();
}

    setInterval(draw,10);