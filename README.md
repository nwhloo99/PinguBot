# Pingu Bot (Music Bot for Discord)

Simple bot to play music on Discord voice channels.

## Table of contents
* Requirements
* Getting started
* Features
* Adding your own audio file

## Requirements
* Node
* NPM
* FFMPEG

## Getting Started
Make sure you have all the required tools installed on your machine.

# Installation

**1. Clone the repository** 
```
git clone https://github.com/nwhloo99/PinguBot.git
```

**2. Go to the directory**
```
cd discord-bot/
```

**3. Install the dependencies**
```
npm install
```

# Discord Developer permissions

**1** Create an application on the [discord developer portal](https://discord.com/developers/applications)
**2** After creating your application, select the bot tab and add bot.
**3** To add the bot to your server, go to the OAuth2 tab.
  **3.1** Select bot in the scope tab.
  **3.2** Select these permissions: **Send Messages**, **Manage Messages**, **Connect**, **Speak**.
  **3.3** Copy the generated URL and paste it into your browser.
  **3.4** Select the target server and click the authorize button.
  
# Setting up the config.json file

**Getting your token**

From the discord developer portal, go to the Bot tab and copy **Token**

**Putting the token into config.json**

Paste the copied Token into the area labelled **YOUR_TOKEN**
  
## Setting up the database
Before you can use any of the commands that make use of the local database, you need to run the `dbInit.js` file
```
node dbInit.js
```

## Features and Commands
> Note: All commands are prefixed with a **#**

* Play music from YouTube via url

`#play YOUTUBE_URL`

* Skip current song

`#skip`

* Stop the song and clear the queue

`#stop`

* List all the songs in the queue

`#list`

* Plays the song from the saved name in the database

`#play_song SAVED_NAME`

* Saves the given url to the saved name

`#save_song SAVED_NAME YOUTUBE_URL`

* Plays small section from call an ambulance meme

`#ambulance`

* Plays a yawn soundtrack

`#yawn`

* Displays list of commands that can be used

`#help`

## Adding your own audio files

You can add your own mp3 or wav audio files to play with your own command

# Adding your audio file

Add your audio file under /commands/sounds/

# Create your own command

Create a new .js file with the name being your command name `command_name.js`

# Copy code from ambulance or yawn

Copy over the code from ambulance.js or yawn.js

# Change the required fields

Under the module.exports section, change the `name`, `description` fields

Under the play function, change the file path to your audio file
```javascript
const dispatcher = connection.play(path.join(__dirname, '/sounds/FILE_NAME'));
```
