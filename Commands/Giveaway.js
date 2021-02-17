module.exports = {
    name: 'giveaway',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#000000')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('**__Black Dieci (Exotic) Giveaway__**')
        .setThumbnail('https://cdn.discordapp.com/attachments/804565322681286676/811698218701815808/dieci.png')
        .setDescription('**How To Enter:**')
        // .setDescription(':one: React to this message (click the check mark and you get 1 entry)')





        // .addFields(
        //     {name: ':one:', value: 'React to this message (click the check mark and you get 1 entry)'},
        //     {name: ':two:', value: 'For every person you invite, you get an extra entry (__**which means a better chance at winning!**__)'},
        //     {name: ':three:', value: '__A winner will be randomly chosen on **3/19/21**!__'}
        // )
        // .addFields(
        //     {name: ':question: If you have any questions, please contact:', value: 'An owner or Moderator'}
        // )




        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )




        .setFooter('🛈 The winner is chosen completely randomly. You do not need to invite people to win, but it does help you. If you do not get randomly chosen and complain or accuse this bot as rigged, then it will result in a temporary mute. Thanks, Rocket League Trading Server ©');


            message.channel.send(newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }

        
    }
}