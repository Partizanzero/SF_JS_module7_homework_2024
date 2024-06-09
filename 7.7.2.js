function calculate(a, b, operator){
   switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Invalid operator";
    }
}

const arr = [2, 3, "+"];
console.log(calculate.apply(null, arr));
