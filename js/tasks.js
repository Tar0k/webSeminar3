function homework() {
    let num1 = parseInt(prompt("Введите первое число: "))
    let num2 = parseInt(prompt("Введите второе число: "))
    let operator = prompt("Введите действие")

    switch (operator) {
        case "+":
            alert(`${num1} + ${num2} = ${num1 + num2}`)
            break;
        case "-":
            alert(`${num1} - ${num2} = ${num1 - num2}`)
            break;
        case "*":
            alert(`${num1} * ${num2} = ${num1 * num2}`)
            break;
        case "/":
            alert(`${num1} / ${num2} = ${num1 / num2}`)
            break;
    }
}