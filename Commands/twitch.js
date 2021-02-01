module.exports = {
    name: 'twitch',
    description: "Embed for twitch Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setThumbnail('https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp')
        .setDescription("**This is the Rocket League Trading Server's Twitch Channel owned by <@700481325232160838>:** [click me](https://www.twitch.tv/customscrims_nae).")
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

            // {name: 'Step 1', value: 'Like'},
            // {name: 'Step 2', value: 'Subscribe'},
            // {name: 'Step 3', value: 'Comment'}
        )
        .setFooter('Rocket League Trading Server ©');
        message.react('👍');

        message.channel.send(newEmbed);
    }
}