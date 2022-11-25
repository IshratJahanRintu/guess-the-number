let random = Math.trunc((Math.random() * 20) + 1)
let CurrentScore = 20;
const container=document.querySelector('.container')
let result = document.querySelector('.result')
let score = document.querySelector('.score')
let welcome = document.querySelector('.welcome')
const number=document.querySelector('.number')
const typed = document.querySelector('.guess')
const check = document.querySelector('.check')
const highScore = document.querySelector('.highScore')
const body = document.querySelector('body')
const again = document.querySelector('.again')
const left = document.querySelector('.left')
const right=document.querySelector('.right')
console.log(random)

console.log(typed)
again.addEventListener('click', () => {
    random = Math.trunc((Math.random() * 20) + 1)
    console.log(random)
    welcome.innerText = 'Guess My Number!'
    number.innerText = '?'
    result.innerText = 'Start Guessing...'
    score.innerText = '20'
    body.classList.remove('won')
    number.classList.remove('lost')
    welcome.classList.remove('lost')
    check.disabled = false
    left.style.display = 'flex'
        right.style.flex = '0.5'
        right.style.textAlign='left'
    CurrentScore=20
    
})

check.addEventListener('click', () => {
    console.log(typed.value)

    if (!Number(typed.value)) {
        result.innerText = 'Please Type A Number!'
    }
    else {
        if (Number(typed.value) === random) {
            console.log('right')
            result.innerText = 'YOU ARE CORRECT😃'
            score.innerText = CurrentScore
            if (CurrentScore > Number(highScore.innerText)) highScore.innerText = CurrentScore
            number.innerText = random
            body.classList.add('won')
            welcome.innerText = 'CONGRATULATIONS!🎉'
        
            left.style.display = 'none'
            right.style.flex = '1'
            right.style.textAlign = 'center'
            right.style.fontSize = '28px'
        
        
     
        }
    
        else if (Number(typed.value) > random) {
            console.log("wrong")
            result.innerText = 'Too Large!'
            CurrentScore--;
            score.innerText = CurrentScore
        }
        else if (Number(typed.value) < random) {
            result.innerText = 'Too Small!'
            CurrentScore--;
            score.innerText = CurrentScore
        }
    
        if (CurrentScore === 0) {
            result.innerText = 'Game Over😫!'
            number.innerHTML = '<i class="fas fa-frown"></i>'
            number.classList.add('lost')
        
            welcome.innerText = 'Try Again!'
            welcome.classList.add('lost')
            left.style.display = 'none'
            right.style.flex = '1'
            right.style.textAlign = 'center'
            right.style.fontSize = '28px'
        }
    }
    typed.value=''
})
