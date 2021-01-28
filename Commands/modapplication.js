module.exports = {
    name: 'modapplication',
    description: "Embed for modapplication Command",
    execute(message, args, Discord){

        if(message.member.roles.cache.has('795528794936311868')){

            const newEmbed = new Discord.MessageEmbed()
            .setColor('#f3f3f3')
            .setTitle('**__Rocket League Trading Server__**')
            .setThumbnail('https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp')
            .setDescription("**__Apply For Moderator__**!")
            .addFields(
                {
                    name: ':one: **Step One:**', 
                    value: ':white_small_square:  **Fill out the __application__ form: [CLICK HERE](https://forms.gle/H6guVAVNasyoSt5m9)**',
                    inline: false
                },
                {
                    name: ':two: **Step Two:**', 
                    value: ':white_small_square:  **Make sure you answer all questions wth __correct information__!**',
                    inline: false
                },
                {
                    name: ':three: **Step Three:**',
                    value: ':white_small_square:  **Watch this __youtube video__ on what the moderators do if a player needs help: [CLICK HERE](https://www.youtube.com/watch?v=N2NLFoibSYs)**',
                    inline: false
                },
                {
                    name: ':four: **Step Four:**',
                    value: ':white_small_square:  **__Subscribe__ to that Youtube channel and __turn on notifications__ so you know when the next moderator information videos come out!**',
                    inline: false
                },
                {
                    name: ':five: **Step Five:**',
                    value: ':white_small_square:  **Press the __check mark__ below this video**',
                    inline: false
                }
            )
            .setFooter('Rocket League Trading Server ©');
    
            message.channel.send(newEmbed);
        
        
        } else{
            message.channel.send('**You do not have permission to use this command!**')
        }


    }
}

























// module.exports = {
//     name: 'modapplication',
//     description: "Embed for modapplication Command",
//     execute(message, args, Discord){
//         const newEmbed = new Discord.MessageEmbed()
//         .setColor('#f3f3f3')
//         .setTitle('**__Rocket League Trading Server__**')
//         .setThumbnail('https://cdn.discordapp.com/icons/795513122362097675/8574e462fd6570678c1d763a3a0fa6c5.webp')
//         .setDescription("**Apply For Moderator!")
//         .addFields(
//             {
//                 name: ':one: **Step One:**', 
//                 value: ':white_small_square:  **Fill out the __application__ form: [CLICK HERE](https://forms.gle/H6guVAVNasyoSt5m9)**',
//                 inline: false
//             },
//             {
//                 name: ':two: **Step Two:**', 
//                 value: ':white_small_square:  **Make sure you answer all questions wth __correct information__!**',
//                 inline: false
//             },
//             {
//                 name: ':three: **Step Three:**',
//                 value: ':white_small_square:  **Watch this __youtube video__ on what the moderators do if a player needs help: [CLICK HERE](https://www.youtube.com/watch?v=N2NLFoibSYs)**',
//                 inline: false
//             },
//             {
//                 name: ':four: **Step Four:**',
//                 value: ':white_small_square:  **__Subscribe__ to that Youtube channel and __turn on notifications__ so you know when the next moderator information videos come out!**',
//                 inline: false
//             },
//             {
//                 name: ':five: **Step Five:**',
//                 value: ':white_small_square:  **Press the __check mark__ below this video**',
//                 inline: false
//             }
//         )
//         .setFooter('Rocket League Trading Server ©');

//         message.channel.send(newEmbed);
//     }
// }