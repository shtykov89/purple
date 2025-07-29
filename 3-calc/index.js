const { add } = require('./add.js')
const { multiply } = require('./multiply.js')
const { divide } = require('./divide.js')
const { subtract } = require('./subtract.js')

const firstNum = +process.argv[2]
const secondNum = +process.argv[3]
const operation = process.argv[4]

if (!Number.isNaN(firstNum) && !Number.isNaN(secondNum)) {
    switch(operation) {
        case 'add': {
            add(firstNum, secondNum);
            break
        }
        case 'multiply': {
            multiply(firstNum, secondNum);
            break
        }
        case 'divide': {
            divide(firstNum, secondNum);
            break
        }
        case 'subtract': {
            subtract(firstNum, secondNum);
            break
        }
        default: {
            throw new Error('Unknown operation')
        } 
    }
    
}

