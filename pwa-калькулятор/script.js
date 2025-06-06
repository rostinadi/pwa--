let display = document.getElementById('display');

function appendToDisplay(value) {
    let current = display.value;

    if (value === '.') {
        let lastOperatorIndex = Math.max(
            current.lastIndexOf('+'),
            current.lastIndexOf('-'),
            current.lastIndexOf('*'),
            current.lastIndexOf('/')
        );

        let lastNumber = current.slice(lastOperatorIndex + 1);

        if (lastNumber.includes('.')) {
            return; // Точка уже есть в текущем числе
        }

        if (current === '') {
            display.value = '0.';
            return;
        }

        if (['+', '-', '*', '/'].includes(current.slice(-1))) {
            display.value += '0.';
            return;
        }
    }

    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Ошибка';
    }
}

function backspace() {
    display.value = display.value.slice(0, -1); // удаляем последний символ
}


