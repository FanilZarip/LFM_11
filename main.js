function Calc (mathOperator, a, b) {
    const isEmptyFunctionParam = (a === undefined || b === undefined || mathOperator === undefined);
    const isNotNumber = (typeof a !== "number" || typeof b !== "number");
    let result;
 
    if (isEmptyFunctionParam || isNotNumber) {
        console.log("Error");
        return;        
    }

    switch (mathOperator) {
        case 'sum':
            result = a + b;
            break;
        case 'subt':
            result = a - b;
            break;
        case 'multi':
            result = a * b;
            break;
        case 'division':
            result = a / b;
            break;
        case 'Remainder':
            result = a % b;
            break;
        case 'exp':
            result = a ** b;
            break;
        default:
            console.log('unknown operation');
            return;
    }
    console.log(result);
}

Calc('sum', 9, 5);
Calc('subt', 9, 5);
Calc('multi', 9, 5);
Calc('division', 9, 5);
Calc('Remainder', 9, 5);
Calc('exp', 9, 5);

Calc('qwerty', 97, 5);
Calc();
Calc('Remainder', '8', 5);
Calc('qq', 9, 5);