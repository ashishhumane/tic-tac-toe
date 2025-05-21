console.log("welcome to MyTicTacToe")

let onClickAudio = new Audio("audio1.wav")
 

let turn = "X"

let isgameover = false

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    const boxes = document.getElementsByClassName('content')
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    wins.forEach(e => {
        if (boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[1]].innerText === boxes[e[2]].innerText && boxes[e[0]].innerText !== "") {
            document.getElementsByClassName('turn')[0].innerText = boxes[e[0]].innerText + " won"
            isgameover = true
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = '150px'
        }
    })
}

//game logic

let blocks = document.getElementsByClassName('blocks')
Array.from(blocks).forEach(elements => {
    let box = elements.querySelector('.content')
    elements.addEventListener('click', (e) => {
        if (box.innerText === "") {
            box.innerText = turn
            turn = changeTurn();
            onClickAudio.play()
            checkWin()
            if (!isgameover) {
                document.getElementsByClassName('turn')[0].innerText = "Turn for " + turn
            }
        }
    })
})

document.getElementById('reset').addEventListener('click',() => {
    const boxes = document.getElementsByClassName('content')
    Array.from(boxes).forEach(e =>{
        e.innerText = ""
    })

    turn = "X"
    isgameover = false
    document.getElementsByClassName('turn')[0].innerText = "Turn for " + turn
     document.querySelector('.image').getElementsByTagName('img')[0].style.width = '0px'
})