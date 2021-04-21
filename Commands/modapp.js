module.exports = {
    name: 'giveaway',
    description: "Embed for giveaway Command",
    execute(client, message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        // .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('**__MODERATOR APPLICATION__ (All Platforms)**')
        .setThumbnail('https://www.theproche.com/wp-content/uploads/2019/04/application.jpg')
        .setDescription('**How To Apply:**')
        .addFields(
            {name: ':one: Go to the [Mod Google Doc Form: Click Here](https://forms.gle/H6guVAVNasyoSt5m9)', value: '\u200B'},
            {name: ':two: Fill the application out to the best of your ability', value: '\u200B'},
            {name: ':three: We will review all applications and choose some people over time to have the chance to become a moderator!', value: '\u200B'}
        )
        .addFields(
            {name: ':question: If you have any questions, please contact an owner or moderator', value: '\u200B'}
        )
        .setFooter('🛈 Note that filling this out does not automatically make you a mod. We try to choose the best of the best. Thanks, Rocket League Trading Server ©');
            message.channel.send('|| @everyone ||', newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }
    }
}