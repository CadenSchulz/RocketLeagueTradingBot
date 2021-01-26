module.exports = {
    name: 'scam',
    description: "Embed for scam Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('**Scammers/Reporting Players**')
        .setDescription("**To report a player of scamming or potentially scamming:** <#800439439406923826>")
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}