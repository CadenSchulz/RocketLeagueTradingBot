module.exports = {
    name: 'ping',
    description: "this is  ping command",
    execute(message, args){
        message.channel.send('pong!');
    }
}