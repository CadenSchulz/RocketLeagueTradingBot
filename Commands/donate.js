module.exports = {
    name: 'donate',
    description: "Embed for donate Command",
    execute(message, args, Discord) {

        if (message.member.roles.cache.has('795528794936311868')) {

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#f3f3f3')
                .setTitle('**__Rocket League Trading Server__**')
                .setThumbnail('https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/1_71giin2x/def_height/2700/def_width/2700/version/100051/type/1')
                .setDescription("**DONATE MONEY TO CHARITY!**")
                .addFields(
                    {
                        name: ':small_blue_diamond: The Charity:',
                        value: ':white_small_square:  **All money will be pulled together and donated to** ***St.Jude***',
                        inline: false
                    },
                    {
                        name: ':small_blue_diamond: How much to give:',
                        value: ':white_small_square:  **It is 2021. People are struggling everyday and it is time everyone starts to help out! Donate any amount to St. Jude because anything helps them :)**',
                        inline: false
                    },
                    {
                        name: ':small_blue_diamond: What do you get out of it?',
                        value: ':white_small_square:  **A shoutout and the role: <@&804457671931068477>**',
                        inline: false
                    },
                    {
                        name: ':small_blue_diamond: **__How to Donate__**:',
                        value: `:white_small_square:  [CLICK HERE TO DONATE](https://www.paypal.com/donate?hosted_button_id=H6SZX7KVUGFJQ)`,
                        inline: false
                    }
                )
                .setFooter('Rocket League Trading Server ©');

            message.channel.send(newEmbed);

        } else {
            message.channel.send('**To donate to St. Jude:** https://www.paypal.com/donate?hosted_button_id=H6SZX7KVUGFJQ')
        }
    }
}