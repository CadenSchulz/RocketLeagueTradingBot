module.exports = {
    name: 'image',
    description: 'sends image',
    execute(message, args){
        message.channel.send(`https://i.ibb.co/D8dktQp/4.png`);
    }
}