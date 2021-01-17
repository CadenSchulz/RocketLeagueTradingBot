module.exports = {
    name: 'yes',
    description: "Embed for yes Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**__Getting you help__**')
        .setDescription("Which of these things do you need help with?")
        .addFields(
            {name: 'For help with scams and reporting players, please type:', value: '-scam'},
            {name: 'For help with rules and guidelines of the server, please type:', value: '-rules'},
            {name: 'For help with all commands of the server, please type:', value: '-commands'},
            {name: 'For help or info about this bot, please type:', value: '-bot'},
            {name: 'For any other help not listed here or to talk to a server representative, please type:', value: '-other'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}