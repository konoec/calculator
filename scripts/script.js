function add(value){
    let display = document.getElementById('display').innerHTML;

    if (display.length >= 12) {
        return;
    }

    if (value === '.') {
        const numbers = display.split(/[+\-×÷]/);
        const currentNumber = numbers[numbers.length - 1];

        if (currentNumber.includes('.')) {
            return;
        }
    }

    if (['+', '-', '×', '÷'].includes(value) &&
        ['+', '-', '×', '÷'].includes(display.slice(-1))) {
        return;
    }

    if (value === '.'){
        document.getElementById('display').innerHTML += value;
        return;
    }

    if (display === '0'){
        document.getElementById('display').innerHTML = value;
        return;
    }

    if (!(display === '0')){
        document.getElementById('display').innerHTML += value;
    }
}

function clean(){
    document.getElementById('display').innerHTML = '0';
}

function calculate(){
    const display = document.getElementById('display').innerHTML;

    if (['+', '-', '×', '÷'].includes(display.slice(-1))) {
        return;
    }

    const expression = display
        .replace('×', '*')
        .replace('÷', '/');

    const result = eval(expression);

    if (!isFinite(result)) {
        document.getElementById('display').innerHTML = 'Error';
        return;
    }

    document.getElementById('display').innerHTML =
        Number(result).toFixed(8).replace(/\.?0+$/, '');
}

function toggleSign() {
    let display = document.getElementById('display');
    let value = display.innerHTML;

    if (value !== '0') {
        if (value.startsWith('-')) {
            display.innerHTML = value.substring(1);
        } else {
            display.innerHTML = '-' + value;
        }
    }
}

function percentage() {
    let display = document.getElementById('display');
    let value = parseFloat(display.innerHTML);
    display.innerHTML = (value / 100).toString();
}