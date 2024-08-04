function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = 'Erro';
    }
}
