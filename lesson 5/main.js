const circles = document.querySelectorAll(".circle")
console.log(circles);

let color = prompt('Write the color');


if (color === 'red') {
    circles[0].style.background = 'red';
    console.log('stop');
} else if (color === 'yellow') {
    circles[0].style.background = 'yellow';
    circles[1].style.background = 'yellow';
    console.log('wait');
} else if (color === 'green') {
    circles[0].style.background = 'green';
    circles[1].style.background = 'green';
    circles[2].style.background = 'green';
    console.log('go');
    console.log('error');
} else {
    console.log('error');
}