const ms = require('ms');
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

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> **has been muted**`)
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> **has been muted by** ${message.author} **for** ${ms(ms(args[1]))}`);

            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else
            message.channel.send(`${message.author} **You coudn't mute because no member was selected!**`);
        }else{
            message.channel.send(`${message.author} **You do not have permission to use this command!**`);
        }
    }
}