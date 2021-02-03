module.exports = {
    name: 'image2',
    description: 'sends image',
    execute(message, args){
        message.channel.send(`https://i.ibb.co/NZN2vXv/2.png`);
    }
}