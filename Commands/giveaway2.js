module.exports = {
    name: 'giveaway2',
    description: "Embed for giveaway Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f3f3f3')
        .setTitle('**__TW Octane Giveaway__**')
        .setDescription('**How To Enter:**')
        .setThumbnail('https://temp-ca.s3.amazonaws.com/cdn-files/ris_ss788693510sst1611680127.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2YDWKLAVUAFT3HFY%2F20210126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210126T165528Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=819f667c3bcae58b2539e61e4c743091d3879a5116198b320e57cfc5a00cb19d')
        .addFields(
            {name: '**Step 1**', value: 'React to this message (click the check mark)'},
            {name: '**Step 2**', value: '__**FOR EVERY PERSON YOU INVITE AND IF THEY JOIN, YOU GET 1 ENTRY IN THE RANDOM PICKER FOR THE TW OCTANE. So, the more people you invite, the greater the chance you have at winning it!**__'},
            {name: '**Step 3**', value: 'The giveaway will be given out in __10__ days so start inviting! DM <@700481325232160838> if you have any questions.'}
        )
        .setFooter('Rocket League Trading Server ©');


            message.channel.send(newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }

        
    }
}