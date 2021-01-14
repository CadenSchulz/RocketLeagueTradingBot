module.exports = (client, triggerText, replyText) => {
    client.on('message', message => {
        if (messasge.content.toLowerCase() === triggerText.toLowerCase()) {
            message.author.send(replyText)
        }
    })
}