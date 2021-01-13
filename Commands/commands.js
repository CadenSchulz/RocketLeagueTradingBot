module.exports = {
    name: 'commands',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**__List Of Commands__**')
        .setDescription('**Here is a complete and updated list of all commands:**')
        .addFields(
            {name: '**-help**'},
            {name: '**-youtube**'},
            {name: '**Others:**', value: 'Type the word "help"'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}