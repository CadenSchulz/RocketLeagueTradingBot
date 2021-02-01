module.exports = {
    name: 'emoji',
    description: "Embed for emoji Command",
    execute(message, args, Discord){
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__Rocket League Trading Server__**')
        .setThumbnail(message.guild.iconURL())
        .setDescription(`${message.author} **These are all the emojis:**`)

        message.channel.send(newEmbed).then(msg => {
            msg.react(`795851825189617674`)
            msg.react(`805628018592448534`)
            msg.react(`805626098104139776`)
            msg.react(`795846832458563595`)
            msg.react(`795847121168891934`)
            msg.react(`795847354783629343`)
            msg.react(`795847556420468776`)
            msg.react(`795819918888271893`)
            msg.react(`795842397803249665`)
            msg.react(`795842565659951134`)
            msg.react(`795842760322187285`)
            msg.react(`795843610888503327`)
            msg.react(`795843673320980530`)
            msg.react(`795843714794258432`)
            msg.react(`795844014079344651`)
            msg.react(`795844040825372702`)
            msg.react(`795844053911601152`)
            msg.react(`795844809418866749`)
            msg.react(`795844846685913098`)
            msg.react(`795844868173594674`)
            msg.react(`795844892672131132`)
            msg.react(`795844899856711700`)
            msg.react(`795844914805473285`)
            msg.react(`795844926700257301`)
            msg.react(`795844934322225162`)
            msg.react(`795844941652951050`)
            msg.react(`795844966605783101`)
            msg.react(`795844992860946456`)
            msg.react(`795845014910533652`)
            msg.react(`795845040260776008`)
            // msg.react(``)
            // msg.react(``)
            // msg.react(``)
        })
    }
}