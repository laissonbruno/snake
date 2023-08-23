const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const audio = new Audio('../audio/audio.mp3')

const ponto = document.querySelector(".pontuacao")
const pontuacaoFinal = document.querySelector(".pontuacao_final > span")
const menu = document.querySelector(".menu_screen")
const botaoPlay = document.querySelector(".btn_play")


const tamanho = 30
let direcao, loopId

const posicaoInicial = { x: 270, y: 240 }
let snake = [posicaoInicial]

const aumentaPonto = () => {
    ponto.innerText = `${+ponto.innerText + 10}`;
}


const drawSnake = () => {
    snake.forEach((position, index) => {
        ctx.fillStyle = index === snake.length - 1 ? "white" : "#ddd";
        ctx.fillRect(position.x, position.y, tamanho, tamanho);
    });
};

const randomNumber = (min, max) => Math.round(Math.random() * `${max - min}` + min);


const randomPosition = () => Math.round(randomNumber(0, canvas.width - tamanho) / 30) * 30;



const comida = {
    x: randomPosition(),
    y: randomPosition(),
    color: "red"
}



const drawComida = () => {
    const { x, y, color } = comida
    ctx.shadowColor = color
    ctx.shadowBlur = 10
    ctx.fillStyle = color
    ctx.fillRect(x, y, tamanho, tamanho)
    ctx.shadowBlur = 0
}

const moveSnake = () => {
    if (!direcao) return;

    const head = snake[snake.length - 1];
    const { x, y } = head;

    const direcoes = {
        right: { x: x + tamanho, y },
        left: { x: x - tamanho, y },
        down: { x, y: y + tamanho },
        up: { x, y: y - tamanho }
    };

    const newHead = direcoes[direcao];
    snake.push(newHead);

    snake.shift();
};

const drawGrid = () => {
    ctx.lineWidth = 1
    ctx.strokeStyle = "#191919"

    for (let i = 30; i < canvas.width; i += 30) {
        ctx.beginPath()
        ctx.lineTo(i, 0)
        ctx.lineTo(i, 600)
        ctx.stroke()

        ctx.beginPath()
        ctx.lineTo(0, i)
        ctx.lineTo(600, i)
        ctx.stroke()
    }

}

const checkComida = () => {
    const head = snake[snake.length - 1]

    if (head.x == comida.x && head.y == comida.y) {
        aumentaPonto()
        snake.push(head)
        audio.play()


        let x = randomPosition()
        let y = randomPosition()

        while (snake.find((position) => position.x == x && position.y == y)) {
            x = randomPosition()
            y = randomPosition()
        }

        comida.x = x
        comida.y = y
    }
}

const checkColisao = () => {
    const head = snake[snake.length - 1]
    const canvasLimit = canvas.width - tamanho
    const neckIndex = snake.length - 2

    const ColisaoParede =
        head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit

    const selfColisao = snake.find((position, index) => {
        return index < neckIndex && position.x == head.x && position.y == head.y
    })

    if (ColisaoParede || selfColisao) {
        gameOver()
    }
}

const gameOver = () => {
    direcao = undefined

    menu.style.display = "flex"
    pontuacaoFinal.innerText = +ponto.innerText
    canvas.style.filter = "blur(3px)"
}

const gameLoop = () => {

    ctx.clearRect(0, 0, 600, 600)

    drawGrid()
    drawComida()
    moveSnake()
    drawSnake()
    checkComida()
    checkColisao()


    setTimeout(() => {
        gameLoop()
    }, 300)
}

gameLoop()

document.addEventListener('keydown', ({ key }) => {
    if (key == "ArrowRight" && direcao != "left") {
        direcao = "right"
    }
    if (key == "ArrowLeft" && direcao != "right") {
        direcao = "left"
    }
    if (key == "ArrowDown" && direcao != "up") {
        direcao = "down"
    }
    if (key == "ArrowUp" && direcao != "down") {
        direcao = "up"
    }
})

botaoPlay.addEventListener("click", () => {
    ponto.innerText = "00"
    menu.style.display = "none"
    canvas.style.filter = "none"

    snake = [posicaoInicial]
})
