module.exports = {
    name: 'image',
    description: 'sends image',
    execute(message, args){
        message.channel.send(`https://i.ibb.co/mSZQWCt/6.png`);
    }
}