module.exports = {
    name: 'giveaway',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#777777')
        .setTitle('**TW Octane Giveaway**')
        .setDescription('How To Enter:')
        .addFields(
            {name: 'Step 1', value: 'React to this message (click the check mark)'},
            {name: 'Step 2', value: 'Invite as many people as you can to click the check mark!'},
            {name: 'Step 3', value: '**ONCE THIS MESSAGE HAS 700 REACTIONS (or check marks clicked) THEN THE OCTANE WILL BE GIVEN AT RANDOM TO A LUCKY WINNER**'}
        )
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
}