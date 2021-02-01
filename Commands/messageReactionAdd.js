module.exports = async (client, reaction, user) => {
    if (user.bot || reaction.message.guild.id !== client.config.mainServer) return
    if (reaction.message.partial) {
        await reaction.message.fetch()
    }
    
    let query = await client.query('SELECT * FROM `servers` WHERE `id`="'+reaction.message.guild.id+'"')
    const server = query.getFirst()

    if (server.manualrole !== null) {
        if (reaction.message.channel.id === JSON.parse(server.manualrole).channelID) {
            if (['a_wa', 'a_vic', 'a_tas', 'a_sa', 'a_qld', 'a_nz', 'a_nt', 'a_nsw', 'a_act'].indexOf(reaction._emoji.name) !== -1) {
                const role = reaction._emoji.name.replace('a_', '')

                reaction.message.reactions.cache.forEach(emote => {
                    if (emote._emoji.id !== reaction._emoji.id) {
                        emote.users.remove(user.id)
                        reaction.message.guild.member(user.id).roles.remove(JSON.parse(server.stateroles)[emote._emoji.name.replace('a_', '')])
                    }
                })
                reaction.message.guild.member(user.id).roles.add(JSON.parse(server.stateroles)[role])
                
                await client.query('UPDATE `users` SET `location`="'+role+'" WHERE `id`="'+user.id+'"')
            }
            if (reaction._emoji.name === 'd_check') {
                reaction.message.guild.member(user.id).roles.remove('690593520343449621')
                reaction.message.guild.member(user.id).roles.add('745583174180012083')
            }
        }
    }
}