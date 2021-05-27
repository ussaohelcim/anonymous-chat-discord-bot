# anonymous-chat-discord-bot
Discord bot made with Discord.js to anonymize text chats.

## >*what this do?*
You send a text, the bot gets the message, delete it, then send it at in the text-channel that you choose, with an encrypted username.

## >*why?*
I've made this to learn how to make discord bots.

## How to use
This bot works with Nodejs and Discord.js.

Clone this repository to the current path:
```
git clone https://github.com/ussaohelcim/anonymous-chat-discord-bot.git
```
Install discord.js in current path:
```
npm install discord.js
```
Create a new Nodejs aplication:
```
npm init
```
Modify *config.json*
```json
{
    "TOKEN":"insert your bot token here",
    "TOSENDCHANNEL":"insert the channel id used to send messages here",
    "TOREADCHANNEL":"insert the cannel id used to read messages here"
}
```
Run bot:
```
node .
```
## Discord server configuration
- Create a new bot at Discord Developers Portal then put the token in *config.js*.
- Create, or use, a text channel to bot read messages then put the channel id in *config.js*.
    - It's recomended to use slowmode for something like 30 seconds.
- Create, or use, a text channel to bot send messages then put these channel id in *config.js*.
    

## Known problems
- Discord's bots can make only up to 50 requests per seconds to their API, but some requests have limits like 5 requests per second.

- I don't know how to hide server members.