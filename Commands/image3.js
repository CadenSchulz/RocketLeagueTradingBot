module.exports = {
    name: 'image',
    description: 'sends image',
    execute(message, args){
        message.channel.send(`https://i.ibb.co/cx3f1hk/3.png`);
    }
}