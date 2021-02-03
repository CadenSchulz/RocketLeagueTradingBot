module.exports = {
    name: 'Mia',
    description: "Embed for Mia Command",
    execute(message, args, Discord) {

        if (message.member.roles.cache.has('795528794936311868')) {

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#f3f3f3')
                .setTitle('**__Rocket League Trading Server__**')
                .setThumbnail('https://cdn.discordapp.com/attachments/803104805886623774/806054862222524466/image0.jpg')
                .setDescription("**MIA + CADEN**")
                .addFields(
                    {
                        name: 'I love you ',
                        value: ':white_heart: :blue_heart:',
                        inline: false
                    }
                )
                .setFooter('MiaCaden ©');

            message.channel.send(newEmbed);

        } else {
            message.channel.send('**Sorry, this is Mia and my command** :)')
        }
    }
}