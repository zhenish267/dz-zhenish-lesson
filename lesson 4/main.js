const btnShowDiv = document.querySelector('.button')
const btnChange = document.querySelector('.btn');

function colorRandomNum(min, max) {
    let num = Math.round(Math.random() * (max - min) + min);
    return num;
}
colorRandomNum(0, 255);

function colorHexNum(num){
    return num.toString(16);
}
let c = 0;

function showWeb(){
    let red = colorHexNum(colorRandomNum(0, 255));
    let green = colorHexNum(colorRandomNum(0, 255));
    let blue = colorHexNum(colorRandomNum(0, 255));
    let hex = `#${red}${green}${blue}`;
    console.log('hex: ', hex);
    document.body.style.background = hex;
    console.log(hex);

}
btnChange.addEventListener('click', showWeb)