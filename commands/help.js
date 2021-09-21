module.exports = {
    name: 'help',
    description: 'Help!',
    execute(message, serverQueue, queue, playlists, songlist) {
        var helpMessage = "**List of Commands for ScooterJam**\n";
        helpMessage += "All commands are prefixed with a **#**\n";
        helpMessage += "**1** #play {youtube url} - Adds the song to the song list\n";
        helpMessage += "**2** #skip - Skips the currently playing song\n";
        helpMessage += "**3** #stop - Stops playing the song and clears the list\n";
        helpMessage += "**4** #list - Lists all the songs in the playlist\n";
        helpMessage += "**5** #save_song {song name} {youtube url} - Saves song as **song name** to  database\n";
        helpMessage += "**6** #play_song {song name} - Plays the song from the database\n";
        helpMessage += "**7** #yawn - YAWNNNNN\n";
        helpMessage += "**8** #ambulance - Call an AMBULANCE \n";
        return message.channel.send(helpMessage);
    }
}