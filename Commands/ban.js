module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("**User has been banned from Rocket League Trading Server**");
        }else{
            message.channel.send(`No member selected to kick (Please type: -kick @______)`);
        }
    }
}