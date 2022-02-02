const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (user, age) => {
  console.log(`data recieved. User: ${user}. Age: ${age}`);
});

customEmitter.emit('response', 'nahuel', 35);
