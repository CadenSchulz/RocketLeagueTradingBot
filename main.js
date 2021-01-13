const Discord = require('discord.js');

const client = new Discord.Client();

const privateMessag = require('./private-message')

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./Commands/${file}`);

	client.commands.set(command.name, command);
}


client.once('ready', () =>{
	console.log('RocketLeagueTradingBot is online!');
	client.user.setActivity('for -help', {type: 'WATCHING' });

	privateMessag(client, 'help', '**__If you need help, check out the support channel in the Rocket League Trading Server or use this link to get there:__**  https://discord.com/channels/795513122362097675/797363588909891584/797370786414723083')
});

client.on('message', message => {

	switch (args[0]) {
		case 'help':
			const Embed = new RichEmbed()
			.setColor('#777777')
        .setTitle('**Help Center**')
        .setDescription('Follow these steps to get help')
        .addFields(
            {name: 'Step 1', value: 'Go to the SUPPORT channel'},
            {name: 'Step 2', value: 'Click the reaction button (looks like an envelope)'},
            {name: 'Step 3', value: 'A private channel that only you and moderators can see will be setup. Talk with a moderator and they will help you out!'},
            {name: 'Extra Help', value: 'If no moderator assists you, then talk in general-chat for community support'}
        )
        .setImage('https://img.icons8.com/nolan/452/rocket-league.png')
        .setFooter('Rocket League Trading Server ©');

        message.channel.send(newEmbed);
    }
	}


	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'help'){
		client.commands.get('help').execute(message, args, Discord)
	}
	if(command === 'giveaway'){
		client.commands.get('giveaway').execute(message, args, Discord);
	}
});


client.login(process.env.token);