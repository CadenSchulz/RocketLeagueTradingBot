module.exports = {
    name: 'other',
    description: "Embed for other Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**Other Help**')
        .setDescription("**To talk to a representative:** <#797363588909891584>")
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}