module.exports = {
    name: 'server',
    description: "Embed for server Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle(`**Server name**: ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`)
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}









