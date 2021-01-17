const { Client } = require("discord.js");

module.exports = {
    name: 'help',
    description: "Embed for Help Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('Hey,' + message.author.toString())
        .setDescription('Check your messages!')
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}