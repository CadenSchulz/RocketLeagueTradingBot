module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){

        if(message.member.roles.cache.has('797392951310549033')){

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> **has been banned from the Rocket League Trading Server by** ${message.author}`);
        }else
            message.channel.send(`${message.author} **You coudn't ban that member because no member was selected!**`);
        }else{
            message.channel.send(`${message.author} **You do not have permission to use this command!**`);
        }
    }
}