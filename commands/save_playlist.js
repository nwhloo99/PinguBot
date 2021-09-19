const fs = require('fs');
var path = require('path');

module.exports = {
    name: 'save_playlist',
    description: 'Save Playlist!',
    execute(message, serverQueue, queue, playlists, songlist) {
        if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to list the music!"
        );

        if (!serverQueue)
            return message.channel.send("The song queue is empty!");

        const args = message.content.trim().split(/ +/);
        const playlistName = args[1].toLowerCase();

        if (playlistName == undefined || playlistName.trim() == "") 
            return message.channel.send("Please enter a valid playlist name");

        const playlistSongs = [];
        serverQueue.songs.forEach((song) => playlistSongs.push(song));

        playlists.set(playlistName, playlistSongs);
        const data = JSON.stringify(playlists);
        console.log(data);

        
        fs.writeFile(path.join(__dirname, '/data/playlists.json'), data, (err) => {
            if (err) 
                throw err;
            
            console.log("JSON data is saved.");
        });
        

        message.channel.send(`Successfully saved playlist ${playlistName}`)
        return playlistSongs.forEach((song, index) => {
            const songNumber = index + 1;
            message.channel.send(
                `**${songNumber}:** ${song.title}`
            )
        }); 
    }
}