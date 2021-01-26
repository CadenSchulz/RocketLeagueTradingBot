module.exports = {
    name: 'giveaway',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__TW Octane Giveaway__**')
        .setDescription('**How To Enter:**')
        .addFields(
            {name: '**Step 1**', value: 'React to this message (click the check mark)'},
            {name: '**Step 2**', value: 'Invite as many people as you can to click the check mark!'},
            {name: '**Step 3**', value: '__ONCE THIS MESSAGE HAS 700 REACTIONS (or check marks clicked) THEN THE OCTANE WILL BE GIVEN AT RANDOM TO A LUCKY WINNER__'}
        )
        .setFooter('Rocket League Trading Server ©');


            message.channel.send(newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }

        
    }
}