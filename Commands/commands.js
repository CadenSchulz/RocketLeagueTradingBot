module.exports = {
    name: 'commands',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**__List Of Commands__**')
        .setDescription('**Here is a complete and updated list of all commands:**')
        .addFields(
            {name: '``-help``', value: '``-youtube``'}, //TYPE `` to make the gray outline in the embed
            {name: '``-bot``', value: '**``-ping``**'},
            {name: '``-server``', value: '**``----------``**'},
            {name: 'NEED HELP STILL?', value: '``-help or <#797363588909891584>``'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}