document.addEventListener('DOMContentLoaded', () => {
    const calcOutput = document.getElementById('calcOutput');
    const calcHistory = document.getElementById('calcHistory');
    
    let currentInput = '0';
    let previousInput = '';
    let selectedOperator = null;
    let shouldResetScreen = false;
    
    // Append Digit
    window.appendDigit = function(digit) {
        if (currentInput === '0' || shouldResetScreen) {
            currentInput = digit;
            shouldResetScreen = false;
        } else {
            currentInput += digit;
        }
        updateScreen();
    };
    
    // Append Operator
    window.appendOperator = function(op) {
        if (selectedOperator !== null && !shouldResetScreen) {
            evaluateExpression();
        }
        previousInput = currentInput;
        selectedOperator = op;
        calcHistory.textContent = `${previousInput} ${op}`;
        shouldResetScreen = true;
    };
    
    // Append Decimal
    window.appendDecimal = function() {
        if (shouldResetScreen) {
            currentInput = '0.';
            shouldResetScreen = false;
            updateScreen();
            return;
        }
        if (!currentInput.includes('.')) {
            currentInput += '.';
        }
        updateScreen();
    };
    
    // Toggle Sign (+/-)
    window.toggleSign = function() {
        if (currentInput === '0') return;
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateScreen();
    };
    
    // Clear Calculator (AC)
    window.clearCalculator = function() {
        currentInput = '0';
        previousInput = '';
        selectedOperator = null;
        calcHistory.textContent = '';
        shouldResetScreen = false;
        updateScreen();
    };
    
    // Evaluate Expression (=)
    window.evaluateExpression = function() {
        if (selectedOperator === null || shouldResetScreen) return;
        
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result = 0;
        
        switch (selectedOperator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert("Error: Division by zero");
                    clearCalculator();
                    return;
                }
                result = prev / current;
                break;
            case '%':
                result = prev % current;
                break;
            default:
                return;
        }
        
        calcHistory.textContent = `${previousInput} ${selectedOperator} ${currentInput} =`;
        // Round to avoid float point issues
        currentInput = Math.round(result * 1e8) / 1e8;
        currentInput = currentInput.toString();
        selectedOperator = null;
        shouldResetScreen = true;
        updateScreen();
    };
    
    function updateScreen() {
        calcOutput.textContent = currentInput;
    }
    
    // Keyboard Event Listener
    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            appendDigit(e.key);
        } else if (e.key === '.') {
            appendDecimal();
        } else if (e.key === '=' || e.key === 'Enter') {
            evaluateExpression();
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            appendOperator(e.key);
        } else if (e.key === 'Backspace') {
            if (currentInput.length > 1) {
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput = '0';
            }
            updateScreen();
        } else if (e.key === 'Escape') {
            clearCalculator();
        }
    });
});
