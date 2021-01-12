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

	privateMessag(client, 'help', 'If you need help, check out the support channel in the Rocket League Trading Server!')
});

client.on('message', message => {


	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'help'){
		client.commands.get('help').execute(message, args, Discord)
	}
	if(command === 'giveaway'){
		client.commands.get('giveaway').execute(message, args, Discord)
	}
	if(Text === 'help'){
		client.Text.get('help').execute(message, message, Discord);
	}
});


client.login(process.env.token);