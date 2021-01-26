module.exports = {
    name: 'youtube',
    description: "Embed for youtube Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setThumbnail(message.guild.iconURL())
        .setDescription("**This is the Rocket League Trading Server's Youtube Channel:** [click me](https://www.youtube.com/channel/UCeHkU3QW6zcEC68F3F4zwXw).")
        .addFields(
            {
                name: ':one: Step One:', 
                value: ':white_small_square:  **Like**',
                inline: false
            },
            {
                name: ':two: Step Two:', 
                value: ':white_small_square:  **Comment**',
                inline: false
            },
            {
                name: ':three: Step Three:',
                value: ':white_small_square:  **Subscribe**',
                inline: false
            },
            {
                name: ':four: Step Three:',
                value: ':white_small_square:  **Press The Bell For Post Notifications**',
                inline: false
            }

            // {name: 'Step 1', value: 'Like'},
            // {name: 'Step 2', value: 'Subscribe'},
            // {name: 'Step 3', value: 'Comment'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}