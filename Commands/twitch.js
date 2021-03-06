module.exports = {
    name: 'twitch',
    description: "Embed for twitch Command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('**__Rocket League Trading Server__**')
            .setThumbnail('https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp')
            .setDescription("**This is the Rocket League Trading Server's Twitch Channel owned by <@700481325232160838>:** [click me](https://www.twitch.tv/cadenscrims).")
            .addFields(
                {
                    name: ':one: Step One:',
                    value: ':white_small_square:  **Follow**',
                    inline: false
                },
                {
                    name: ':two: Step Two:',
                    value: ':white_small_square:  **Chat when live**',
                    inline: false
                },
                {
                    name: ':three: Step Three:',
                    value: ':white_small_square:  **Share The Stream With Friends and Family**',
                    inline: false
                },
                {
                    name: ':four: Step Four:',
                    value: ':white_small_square:  **Turn on Notifications**',
                    inline: false
                }
            )
            .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed).then(msg => {
            msg.react('👍')
            msg.react('👎')

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        }
        msg.awaitReactions(filter, {max: 1, time: 86400000, errors: ['time']}).then(collected => {
            const reaction = collected.first()
            message.reply((reaction.emoji.name === '👍') ? 'you reacted with a thumbs up.' : 'you reacted with a thumbs down.')
          }).catch(collected => {
            message.reply('you did\'t react with neither a thumbs up, nor a thumbs down in time!.')
          })
            });
    }
}

























 // .then(message => {
        //     message.react('👍')
        //     message.react('👎');
        // })