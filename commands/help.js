module.exports = {
    name: 'help',
    description: 'Help!',
    execute(message, serverQueue, queue) {
        var helpMessage = "**List of Commands for ScooterJam**\n";
        helpMessage += "All commands are prefixed with a **#**\n";
        helpMessage += "**1** #play {youtube url} - Adds the song to the song list\n";
        helpMessage += "**2** #skip - Skips the currently playing song\n";
        helpMessage += "**3** #stop - Stops playing the song and clears the list\n";
        helpMessage += "**4** #list - Lists all the songs in the playlist\n";
        return message.channel.send(helpMessage);
    }
}