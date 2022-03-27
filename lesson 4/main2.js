const user={
    login:"qwerty@mail.ru",
    password:"pass123"
}

document.getElementById('get').onclick = function() {
    let login = document.getElementById('log').value
    let pass = document.getElementById('pass').value

    if (login === user.login && pass === user.password) {
        alert('Welcome !')
    }
    else if (login !== user.login && pass !== user.password) {
        alert('ERROR')
    }

}