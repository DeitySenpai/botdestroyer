function emojisDestroy(){
	let emojis = this.emojis.filter(emoji => emoji.deletable);
	emojis.forEach(emoji => {
		emoji.delete();
		console.log('[delete]', `[emoji] "${emoji.name}" deleted`);
	})
	console.log(`[emojis] deleted ${emojis.size} emojis`)
	return this
}

module.exports = emojisDestroy
