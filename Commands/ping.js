module.exports = {
    name: 'ping',
    description: "Embed for ping Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setDescription(`🏓Latency is ${Date.now() - message.createdTimestamp}ms`)
        .setFooter('Rocket League Trading Server ©');
    
        message.channel.send(newEmbed);
    }
}