module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(message, args){

        if(message.member.roles.cache.has('795528794936311868')){

        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("User has been banned from the Rocket League Trading Server");
        }else
            message.channel.send(`**You coudn't ban that member because no member was selected!**`);
        }else{
            message.channel.send('You do not have permission to use this command');
        }
    }
}