const { add } = require('./add.js')
const { multiply } = require('./multiply.js')
const { divide } = require('./divide.js')
const { subtract } = require('./subtract.js')

const EventEmitter = require('node:events');

const emitter = new EventEmitter()

emitter.addListener('add', (a, b)=> {
    add(a, b);
})
emitter.addListener('multiply', (a, b)=> {
    multiply(a, b);
})
emitter.addListener('divide', (a, b)=> {
    divide(a, b);
})
emitter.addListener('subtract', (a, b)=> {
    subtract(a, b);
})

const firstNum = +process.argv[2]
const secondNum = +process.argv[3]
const operation = process.argv[4]

if (!Number.isNaN(firstNum) && !Number.isNaN(secondNum)) {
    emitter.emit(operation, firstNum, secondNum)
}
