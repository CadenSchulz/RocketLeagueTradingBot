module.exports = {
    name: 'giveaway2',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__TW Octane Giveaway__**')
        .setDescription('**How To Enter:**')
        .setThumbnail('https://pbs.twimg.com/media/EUndDZHXsAUBBRp.png')
        .addFields(
            {name: '**Step 1**', value: 'React to this message (click the check mark)'},
            {name: '**__Step 2__**', value: '__**FOR EVERY PERSON YOU INVITE AND IF THEY JOIN, YOU GET 1 ENTRY IN THE RANDOM PICKER FOR THE TW OCTANE. So, the more people you invite, the greater the chance you have at winning it!**__'},
            {name: '**Step 3**', value: 'The giveaway will be random and given out in __10__ days so start inviting! DM <@700481325232160838> if you have any questions.'}
        )
        .setFooter('Rocket League Trading Server ©');


            message.channel.send(newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }

        
    }
}