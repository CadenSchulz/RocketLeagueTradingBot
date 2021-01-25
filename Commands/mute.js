module.exports = {
    name: 'mute',
    description: "This command mutes a member!",
    execute(message, args){

        if(message.member.roles.cache.has('797392951310549033')){

        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Verified Trader');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'In Timeout');

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`)

        } else
            message.channel.send(`**You coudn't mute that member because no member was selected!**`);
        }else{
            message.channel.send('You do not have permission to use this command');
        }
    }
}