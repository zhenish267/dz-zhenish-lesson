let state = 0

let label = document.getElementById('count')

let increment = document.getElementById('inc')
let decrement = document.getElementById('dec')

label.innerText = 0

decrement.addEventListener('click', function(){
    state += 1
    label.innerText = state
    label.style.color = 'green'
})
increment.addEventListener('click', function(){
    state -= 1
    label.innerText = state
    label.style.color = 'red'
})