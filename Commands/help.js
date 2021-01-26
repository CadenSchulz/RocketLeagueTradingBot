const { Client } = require("discord.js");

module.exports = {
    name: 'help',
    description: "Embed for Help Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__HELP CENTER__**')
        .setDescription('**Check your messages!**')
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}