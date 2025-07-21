//event emitter

//emit -,trigger event
//on -> addd a callback funciton
//once => add one time listener

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
//console.log(EventEmitter)
// eventEmitter.on('g5student',()=>{
//     console.log('started');
// });

// eventEmitter.emit('g5student');

eventEmitter.once('g5student',()=>{
    console.log('started');
});
eventEmitter.emit('g5student');
eventEmitter.emit('g5student');


