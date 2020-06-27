const bodyElement = document.querySelector('body')
const divElement = document.createElement('div')
divElement.style.backgroundColor = 'red'
divElement.style.width = '50px'
divElement.style.height = '50px'
let playerScore = document.createElement('h1')
playerScore.append('Score: 0 ')
bodyElement.append(playerScore)
let score = 0



divElement.addEventListener('click', function () {

    score += 1
    console.log(score)
    playerScore.innerHTML = `Score: ${score}`
    divElement.remove()

})

setInterval(function () {
    bodyElement.append(divElement)
    divElement.style.top = Math.floor(Math.random() * 500) + 'px'
    divElement.style.left = Math.floor(Math.random() * 500) + 'px'
}, 3000)