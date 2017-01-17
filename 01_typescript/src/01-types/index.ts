console.log('01-types')
console.log('--------')

console.log('** undefined')

let thisIsUndefined = undefined
console.log(thisIsUndefined)
console.log('typeof thisIsUndefined -> ' + typeof thisIsUndefined)

console.log('** booleans')

let untypedButTrue = true
let thisIsTrue: boolean = true
let thisIsFalse: boolean = false
let thisIsNull: boolean = null
//let thisFails: boolean = 12 // Type '12' is not assignable to type 'boolean'
console.log(untypedButTrue)
console.log(thisIsTrue)
console.log(thisIsFalse)
console.log(thisIsNull)
console.log('typeof untypedButTrue -> ' + typeof untypedButTrue)

console.log('** numbers')

let untypedNumber = 55
let firstNumber: number = 12
let secondNumber: number = 3.5
let nullNumber: number = null
//let thirdNumber: number = '5' // Type '"5"' is not assignable to type 'number'
console.log(untypedNumber)
console.log('typeof untypedNumber -> ' + typeof untypedNumber)
console.log(firstNumber)
console.log(secondNumber)
console.log(nullNumber)

console.log('** strings')

let someText: string = 'test message'
let nullText: string = null
let untypedText = 'test message'
console.log(someText)
console.log(nullText)
console.log('typeof untypedText -> ' + typeof untypedText)

console.log('** Arrays')

let anArray: number[] = [1, 23, 43]
//let anArray2Fail: Array<number> = ['orange', 12, 'oranges'] // Type '(string | number)[]' is not assignable to type 'number[]'
let anArray2: Array<number|string> = ['orange', 12, 'oranges']
let untypedArray2: Array<any> = ['orange', 12, 'oranges']
console.log(anArray)
console.log(anArray2)
console.log('typeof anArray -> ' + typeof anArray)
console.log('typeof anArray2 -> ' + typeof anArray2)
console.log('typeof untypedArray2 -> ' + typeof untypedArray2)

console.log('** any')

let looselyTyped: any
console.log('typeof looselyTyped -> ' + typeof looselyTyped)
looselyTyped = 12
console.log('typeof looselyTyped -> ' + typeof looselyTyped)
looselyTyped = 'toto'
console.log('typeof looselyTyped -> ' + typeof looselyTyped)




const untyped = 55
const firstNumber: number = 12

if(true){
    const blockScopedNumber = 500
}


console.log(untyped)
console.log(firstNumber)

const isDone: boolean = false
const decimal: number = 6
const color: string = 'blue'
const array: number[] = [1, 2, 3]
const notSure: any = 4

console.log(isDone)
console.log(decimal)
console.log(notSure)
