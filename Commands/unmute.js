module.exports = {
    name: 'unmute',
    description: "This command unmutes a member!",
    execute(message, args){

        if(message.member.roles.cache.has('797392951310549033')){

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified Trader');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'In Timeout');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)

        } else
            message.channel.send(`**You coudn't unmute because no member was selected!**`);
        }else{
            message.channel.send('**You do not have permission to use this command**');
        }
    }
}