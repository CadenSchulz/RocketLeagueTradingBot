module.exports = {
    name: 'image5',
    description: 'sends image',
    execute(message, args){
        message.channel.send(`https://i.ibb.co/nkshGKP/5.png`);
    }
}