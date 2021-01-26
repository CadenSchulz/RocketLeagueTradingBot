module.exports = {
    name: 'commands',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__List Of Commands__**')
        .setDescription('**Here is a complete and updated list of all commands:**')
        .addFields(
            {
                name: ':white_small_square: **prefix: -**',
                value: ':small_red_triangle_down: ',
                inline: false
            },   
        )
        .addFields(
            {
                name: ':white_small_square: ``-help``', 
                value: ':white_small_square: ``-youtube``',
                inline: false
            },
            {
                name: ':white_small_square: ``-bot``', 
                value: ':white_small_square: **``-ping``**',
                inline: false
            },
            {
                name: ':white_small_square: ``-server``', 
                value: ':white_small_square: **``----------``**',
                inline: false
            },
            {
                name: 'NEED HELP STILL?', 
                value: '<#797363588909891584>',
                inline: false
            }
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}