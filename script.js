let firstNumber = 1
let secondNumber = 2

function sum(a, b) {
    let result = a + b;
    console.log(result)
    return result
}

sum(firstNumber, secondNumber)
sum(40, 30)

const additionResult = sum(10, 20)

console.log(additionResult)

function fullName(firstName, lastName) {
    return firstName + lastName
}

console.log(fullName(`Denis`, `Mateas`))

function compare(a, b) {
    if(a > b) {
        return a
    }
    return b
}

console.log(compare(50, 40))


function isDivisibleByTwo (numberOne) {
   if(numberOne % 2 == 0) {
    console.log(`is divisible by two`)
   } else {
    console.log(`is not divisible by two`)
   }

}

isDivisibleByTwo(21)
isDivisibleByTwo(20)



