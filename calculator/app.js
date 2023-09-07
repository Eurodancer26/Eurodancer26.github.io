window.addEventListener('DOMContentLoaded', () => {
        const btns = document.querySelectorAll('.btn'),
        disp = document.querySelector('.tabl');

    let key = '', 
        a = '', 
        b = '', 
        operationSymb = '', 
        actionСheck = ['-', '+', '*', '/'],
        operationArr = [],
        numberArr = [];

    disp.textContent = 0;

    function delDisp() {
            a = '';
            b = '';
            operationArr = [];
            numberArr = [];
            disp.textContent = 0;
    }

    function getResultWhenChangingSign(sign = operationArr[0]) {
        key = calculateResult((+numberArr[0]), (+numberArr[1]), sign);
        numberArr = [];
        numberArr.push(+key);
    }

    function calcKeyOperations(number, sign) {
        b = number;
        key = a;
        if (b === '') {
            numberArr.push(a);
            a = '';
            if (sign === '+') {
                key = numberArr.reduce((acc, val) => acc + (+val), 0);
                if (operationArr[1] === '+') {
                    getResultWhenChangingSign();
                }

            } else if (sign === '-') {
                key = numberArr.reduce((acc, val) => acc - (+val));
                if (operationArr[1] === '-') {
                    getResultWhenChangingSign();
                }

            } else if (sign === '*') {
                key = numberArr.reduce((acc, val) => acc * (+val));
                if (operationArr[1] === '*') {
                    getResultWhenChangingSign();
                }

            } else {
                key = numberArr.reduce((acc, val) => acc / (+val));
                if (operationArr[1] === '/') {
                    getResultWhenChangingSign();
                }

            }
            
            if (operationArr.length > 1) {
                operationArr.shift(operationSymb);
            }

            disp.textContent = `${key}${operationSymb}`;
        }

    }

    function calculateResult(a, b, operationSymb) {
        switch (operationSymb) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    return "Can't divide by zero";
                }
                return a / b;
            default:
                return 'Error: Invalid operation';
        }
    }

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let num = e.target.id;
            operationSymb = e.target.dataset.operation;

            if(num) {
                a += num;
                if (b && operationSymb) {
                    a = num;
                    disp.textContent = a;
                } else {
                    b += num;
                    disp.textContent = b;
                }
            }

            if (actionСheck.includes(operationSymb)) {
                operationArr.push(operationSymb);
            }

            switch (operationSymb) {
                case '+':
                    calcKeyOperations(num, operationSymb);
                    break;
                case '-':
                    calcKeyOperations(num, operationSymb);
                    break;
                case '*':
                    calcKeyOperations(num, operationSymb);
                    break;
                case '/':
                    calcKeyOperations(num, operationSymb);
                    break;
                case '=':
                    if (b === '') b = key;
                    numberArr.push(a);
                    numberArr = [];
                    disp.textContent = calculateResult((+key), (+b), operationArr[0]);
                    a = calculateResult((+key), (+b), operationArr[0]);
                    b = '';
                    if (operationSymb === '=') {
                        operationArr.pop(operationSymb);
                    }
                    break;     
                case '%':
                    a = a / 100;
                    disp.textContent = a;
                    console.log(operationSymb);
                    break;         
            }

            if (e.target.dataset.del) {
                disp.textContent = 'delete';
                delDisp();
            }

            if (e.target.dataset.clear) {
                disp.textContent = 'clear';
            }

        });
    });

});