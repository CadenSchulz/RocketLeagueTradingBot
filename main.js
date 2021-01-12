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

	privateMessag(client, 'help', 
	const newEmbed = new Discord.MessageEmbed()
	.setColor('#777777')
	.setTitle('**__TW Octane Giveaway__**')
	.setDescription('**How To Enter:**')
	.addFields(
		{name: '**Step 1**', value: 'React to this message (click the check mark)'},
		{name: '**Step 2**', value: 'Invite as many people as you can to click the check mark!'},
		{name: '**Step 3**', value: '__ONCE THIS MESSAGE HAS 700 REACTIONS (or check marks clicked) THEN THE OCTANE WILL BE GIVEN AT RANDOM TO A LUCKY WINNER__'}
	)
	.setFooter('Rocket League Trading Server ©'));
	message.privateMessag.send(newEmbed);
});

client.on('message', message => {


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