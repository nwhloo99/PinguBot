module.exports = {
    name: 'list',
    description: 'List!',
    execute(message, serverQueue, queue, playlists, songlist) {
        if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to list the music!"
        );

        if (!serverQueue)
            return message.channel.send("The song queue is empty!");

        return serverQueue.songs.forEach((song, index) => {
            const songNumber = index == 0 ? "Now Playing" : index;
            message.channel.send(
                `**${songNumber}:** ${song.title}`
            )
        }); 
    }
}