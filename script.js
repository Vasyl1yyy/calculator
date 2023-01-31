const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display'); 

const color = document.querySelector('.color');

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == 'clear') {
      display.innerHTML = '';
    } else if (item.id == 'backspace') {
      let string = display.innerText.toString();
      display.innerHTML = string.substr(0, string.length - 1);
    } else if (display.innerHTML != '' && item.id == 'equal') {
      display.innerHTML = eval(display.innerHTML);
    } else if (display.innerHTML == '' && item.id == 'equal') {
      display.innerHTML = 'Empty!';
      setTimeout(() => (display.innerHTML = ''), 2000);
    } else if (display.innerHTML == '0' && item.id ) {
      display.innerHTML = item.id;
    } else if (display.innerHTML == '' && item.id == '+') {
      display.innerHTML = '0+';
    } else if (display.innerHTML == '' && item.id == '-') {
      display.innerHTML = '0-';
    } else if (display.innerHTML == '' && item.id == '*') {
      display.innerHTML = '0*';
    } else if (display.innerHTML == '' && item.id == '/') {
      display.innerHTML = '0/';
    } else if (display.innerHTML == '' && item.id == '.') {
      display.innerHTML = '0.';
    } else {
      display.innerHTML += item.id;
    }
  }
})

color.onclick = () => {
  if (color.style.backgroundColor == 'var(--color-black)') {
    document.querySelector('.body').style.backgroundColor = 'var(--color-black)';
    document.querySelector('.count').style.color = 'var(--color-white)'; 
    color.style.backgroundColor = 'var(--color-white)'
  } else {
    document.querySelector('.body').style.backgroundColor = 'var(--color-white)';
    document.querySelector('.count').style.color = 'var(--color-black)'; 
    color.style.backgroundColor = 'var(--color-black)';
  }
}