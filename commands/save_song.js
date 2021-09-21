const { Songs } = require('../dbObjects');

module.exports = {
    name: "save_song",
    description: "Saves Song!",
    async execute(message, serverQueue, queue, playlists, songlist) {
        const args = message.content.split(" ");

        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel)
            return message.channel.send(
                "You need to be in a voice channel to play music!"
            );

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send(
                    "I need the permissions to join and speak in your voice channel!"
            );
        }

        if (args[1] == undefined || args[1] == "") 
            return message.channel.send(
                "Please enter a valid song!"
            );
        
        const saved_song_name = args[1];

        if (args[2] == undefined || args[2] == "") 
            return message.channel.send(
                "Please enter a valid url!"
            );

        const saved_song_url = args[2];

        try {
            const song = await Songs.create({
                name: saved_song_name,
                url: saved_song_url,
            });
            const songs = await Songs.findAll();
            songs.forEach(s => songlist.set(s.name, s));
            return message.reply(`Song ${saved_song_url} saved`);
        } catch (err) {
            if (err.name === 'SequelizeUniqueConstraintError') {
                return message.reply('That tag already exists.');
            }
            return message.reply('Something went wrong with adding a song.')
        }
    }
}