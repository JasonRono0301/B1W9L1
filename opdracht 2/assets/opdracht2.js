//Blok 1 Week 9 Lab 1.
//Opdracht 2 26-10-2020.

var uitkomst;//Een globale variabele zodat ik deze in elke functie kan hergebruiken.

function addition(number1,number2){
    uitkomst = number1 + number2;
    document.write(number1 + ' + ' + number2 + ' = ' + uitkomst + "<br>");
    console.log(uitkomst);//Log voor de uitkomst.
    return number1 + number2;
}

addition(10,12);//Wat de waarden zijn in de parameters.

function subtraction(number1, number2){
    uitkomst = number1 - number2;
    document.write(number1 + ' - ' + number2 + ' = ' + uitkomst + "<br>");
    console.log(uitkomst);
    return number1 - number2;
}

subtraction(58,34);

function multiplication(number1, number2){
    uitkomst = number1 * number2;
    document.write(number1 + ' x ' + number2 + ' = ' + uitkomst + "<br>");
    console.log(uitkomst);
    return number1 * number2;
}

multiplication(6,7);

function division(number1, number2){
    uitkomst = number1 / number2;
    document.write(number1 + ' : ' + number2 + ' = ' + uitkomst + "<br>");
    console.log(uitkomst);
    return number1 / number2;
}

division(144,12);


function increment(number){
    document.write(number +' + 1' + ' = ' +  ++number + "<br>");
}

increment(12);

function decrement(number){
    document.write(number +' - 1' + ' = ' + --number);
}

decrement(34)