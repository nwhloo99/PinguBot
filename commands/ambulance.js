const fs = require('fs');
var path = require('path');

module.exports = {
    name: "ambulance",
    description: "Call an ambulance!",
    async execute(message, serverQueue, queue, playlists) {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel)
            return message.channel.send(
                "You need to be in a voice channel to play sounds!"
            );

        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
            return message.channel.send(
                    "I need the permissions to join and speak in your voice channel!"
            );
        }

        if (serverQueue)
            return message.channel.send(
                "I am already playing something!"
            );

        try {
            var connection = await voiceChannel.join();
            play(connection, message);
        } catch (err) {
            console.log(err);
            return message.channel.send(err);
        }
    }
}

function play(connection, message) {
    const dispatcher = connection.play(path.join(__dirname, '/sounds/ambulance.mp3'));
    message.channel.send("CALL AN AMBULANCE CALL AN AMBULANCE");
    console.log("CALL AN AMBULANCE CALL AN AMBULANCE");
}