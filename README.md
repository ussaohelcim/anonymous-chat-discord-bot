# anonymous-chat-discord-bot
Discord bot made with Discord.js to anonymize text chats.

## How to use
This bot works with Nodejs and Discord.js.

Install discord.js in current path:
```
npm install discord.js
```
Create a new Nodejs aplication:
```
npm init
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
Discord's bots can make only up to 50 requests per seconds to their API, but some requests have limits like 5 requests per second.