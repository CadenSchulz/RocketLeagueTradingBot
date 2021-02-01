module.exports = {
    name: 'youtube',
    description: "Embed for youtube Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setThumbnail('https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp')
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
                name: ':four: Step Four:',
                value: ':white_small_square:  **Press The Bell For Post Notifications**',
                inline: false
            }

            // {name: 'Step 1', value: 'Like'},
            // {name: 'Step 2', value: 'Subscribe'},
            // {name: 'Step 3', value: 'Comment'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed).then(msg => {
            msg.react('👍')
            msg.react('👎')

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        }
        msg.awaitReactions(filter, {max: 1000000, time: 86400000, errors: ['time']}).then(collected => {
            const reaction = collected.first()
            message.reply((reaction.emoji.name === '👍') ? 'you are going to subscribe :)' : 'you are not going to subscribe :(')
          }).catch(collected => {
            message.reply('you did\'t react with neither a thumbs up, nor a thumbs down in time!.')
          })
            });
    }
}
