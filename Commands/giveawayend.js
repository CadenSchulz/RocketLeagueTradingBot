module.exports = {
    name: 'giveawayend',
    description: "Embed for giveawayend Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

        const newEmbed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setColor('#777777')
        .setTitle('**__TW Octane Giveaway COMPLETE__**')
        .setThumbnail('https://temp-ca.s3.amazonaws.com/cdn-files/ris_ss788693510sst1611680127.png?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2YDWKLAVUAFT3HFY%2F20210126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210126T165528Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Signature=819f667c3bcae58b2539e61e4c743091d3879a5116198b320e57cfc5a00cb19d')
        .setDescription('```This giveaway has ended. The owner of the server must follow these directions:```')
        .addFields(
            {name: '``To select winner, type:``', value: '``-randomwinner``'},
            {name: '``To delete this giveaway and start a new one, type:``', value: '``-giveawaydelete``'}
        )
        .setFooter('Rocket League Trading Server ©');


            message.channel.send(newEmbed);

        } else{
            message.channel.send('You do not have permission to use this command')
        }

        
    }
}