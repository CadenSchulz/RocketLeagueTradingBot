module.exports = {
    name: 'giveawaycreds',
    description: "Embed for giveawaycreds Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('**__70,000 Credit Giveaway__ (All Platforms)**')
        .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/1589162835786875498/6F462D3D4C81F07D4411F03ADEAB2132B809E970/')
        .setDescription('**How To Enter:**')
        .addFields(
            {name: ':one: React to this message (click the check mark and you get 1 entry)', value: '\u200B'},
            {name: ':two: For every person you invite, you get an extra entry (__**which means a better chance at winning!**__)', value: '\u200B'},
            {name: ':three: __A winner will be randomly chosen on **6/1/21**!__', value: '\u200B'}
        )
        .addFields(
            {name: ':question: If you have any questions, please contact an owner or moderator', value: '\u200B'}
        )
        .setFooter('🛈 The winner is chosen completely randomly. You do not need to invite people to win, but it does help you. If you do not get randomly chosen and complain or accuse this bot as rigged, then it will result in a temporary mute. Thanks, Rocket League Trading Server ©');
            message.channel.send('|| @everyone ||', newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }
    }
}