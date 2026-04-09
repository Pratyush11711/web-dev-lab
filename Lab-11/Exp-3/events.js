// Import events module
const EventEmitter = require('events');

// Create event emitter object
const eventEmitter = new EventEmitter();

// Register event listener
eventEmitter.on('greet', (name) => {
    console.log(`Hello ${name}, welcome to Node.js!`);
});

// Register another listener for same event
eventEmitter.on('greet', () => {
    console.log('This is second listener');
});

// Custom event with data
eventEmitter.on('dataEvent', (data) => {
    console.log('Data received:', data);
});

// Emit events
eventEmitter.emit('greet', 'Pratyush');
eventEmitter.emit('dataEvent', { id: 1, message: 'Event-driven programming' });