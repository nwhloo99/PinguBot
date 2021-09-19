const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const ytdl = require("ytdl-core");
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    // Set a new item in the Collection
    // With the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

const queue = new Map();
const playlists = new Map();

client.once("ready", () => {
    console.log("Ready!");
});

client.once("reconnecting", () => {
    console.log("Reconnecting!");
});

client.once("disconnect", () => {
    console.log("Disconnect!");
});

client.on("message", async message => {
    if ((message.author.bot) || (!message.content.startsWith(prefix))) return;

    const serverQueue = queue.get(message.guild.id);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) 
        return message.channel.send("You need to enter a valid command! Type #help for commands");

    const command = client.commands.get(commandName);

    try {
        command.execute(message, serverQueue, queue, playlists);
    } catch (err) {
        console.error(err);
        message.reply('There was an error trying to execute the command');
    }
});

client.login(token);
