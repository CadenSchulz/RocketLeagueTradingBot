module.exports = {
    name: 'commands',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setDescription('**Here is a list of __some__ commands:**')
        .addFields(
            {
                name: ':white_small_square: **prefix: -**',
                value: ':small_red_triangle_down: ',
                inline: false
            },   
        )
        .addFields(
            {
                name: ':white_small_square: -help', 
                value: ':white_small_square: **-youtube**',
                inline: false
            },
            {
                name: ':white_small_square: -bot', 
                value: ':white_small_square: **-ping**',
                inline: false
            },
            {
                name: ':white_small_square: -server', 
                value: ':small_red_triangle_down:',
                inline: false
            },
            {
                name: 'NEED HELP STILL?', 
                value: '<#797363588909891584>',
                inline: false
            },
            {
                name: ':small_red_triangle_down:', 
                value: 'FOR A FULL AND UPDATE LIST OF COMMANDS: [CLICK HERE](https://sites.google.com/view/rocketleaguetradingserver/commands)',
                inline: false
            }
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}