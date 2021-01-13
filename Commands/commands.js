module.exports = {
    name: 'commands',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**__List Of Commands__**')
        .setDescription('**Here is a complete and updated list of all commands:**')
        .addFields(
            {name: '-help', value: '**-youtube**'},
            {name: '-bot', value: '**-ping**'},
            {name: '**Others:**', value: 'Type the word "help"'},
            {name: 'NEED HELP STILL?', value: '-commands or -help'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}