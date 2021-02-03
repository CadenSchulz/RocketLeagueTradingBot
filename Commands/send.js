const { execute } = require("./ping");

module.exports = {
    name: 'send',
    description: 'sends image'
    execute(message, args){
        message.channel.send('file:///C:/Users/caden/OneDrive/Pictures/Gaming/1.png');
    }
}