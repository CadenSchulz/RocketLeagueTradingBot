module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){

        if(message.member.roles.cache.has('795528794936311868')){

        const target = message.mentions.users.first();
        if(target)
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("**User has been banned from Rocket League Trading Server**");
        } else{
            message.channel.send(`No member selected to ban (Please type: **-ban @______**)`);
        } else{
            message.channel.send('You do not have permission to use this command')
        }
    }
}