let display = document.getElementById('display');
let currentInput ='';
let previousValue = null;

function tambahAngka(angka) {
    if (angka ==='%') {
        if(currentInput) {
            currentInput = parseFloat(currentInput) / 100;
            display.value = currentInput;
        }
    } else {
        currentInput += angka;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    previousValue = null;
    display.value = '';
}

function backspace () {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function hitung () {
    try {
        let result = new Function('return ' + currentInput)();
        previousValue = result;
        currentInput = result.toString();
        display.value = currentInput;
    } catch (e) {
        display.value = 'Error';
    }
}