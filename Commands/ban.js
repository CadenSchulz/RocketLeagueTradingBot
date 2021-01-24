module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){

        if(message.member.roles.cache.has('797392951310549033')){

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("**User has been banned from Rocket League Trading Server**");
        }else{
            message.channel.send(`You do not have permission to ban that member!`);
        } else{
            message.channel.send('You do not have permission to use this command')
        }
        }
    }
}