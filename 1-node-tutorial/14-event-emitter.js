const EventEmitter = require('events');

const customEmitter = new EventEmitter()

//on - listens for a specific event
// emit - emits an event

customEmitter.on('response',()=>
{
    console.log(`data received`)
})
customEmitter.on('response', (name,id)=>{
    console.log(`response from ${name} with id: ${id}`)
})
//you can create as many functions for the same event
//always first listen then emit
//can add additional arguements, here john and 34
customEmitter.emit('response','john',34)