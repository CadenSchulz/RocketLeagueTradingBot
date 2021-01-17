module.exports = {
    name: 'help',
    description: "Embed for Help Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**Help Center**')
        .setDescription(${person.user} 'Follow these steps to get help')
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}