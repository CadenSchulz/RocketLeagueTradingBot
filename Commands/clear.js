module.exports = {
    name: 'clear',
    // aliases: ['c','remove'],
    // cooldown: 3,
    description: "Clear messages!",
    async execute(message, args) {
        if(message.member.roles.cache.has('797392951310549033')){

        if(!args[0]) return message.reply("Please specify the amount of messages to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 100) return message.reply("You cannot delete more than 100 messages!")
        if(args[0] < 1) return message.reply("You must delete at least 1 message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
            message.channel.send(`${message.author} cleared messages!`);
        })
    } else{
        message.channel.send('You do not have permission to use this command')
    }
    }
}