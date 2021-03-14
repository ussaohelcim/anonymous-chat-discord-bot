botToken = ""//insert your bot token here
toSendChannel = ""//insert the channel id used to send messages here
toReadChannel = ""//insert the cannel if used to read messages here


const Discord = require('discord.js');
const robo = new Discord.Client();
robo.login(botToken);


robo.on('ready', ()=>{//i dont know what is this, but this its called when the bot starts
    console.log("bot started");
})
robo.on('message', message =>{//i dont know what is this, but this its called when someone sends a message

    if(message.channel.id === toSendChannel)
    {//check if the message its on "toSendChannel"
        console.log(message.author.tag," said " ,message.content);//display in the console the message author and the message
        msg = message.content;
        message.delete();//delete the message
        robo.channels.cache.get(toReadChannel).send(msg);//send the message to the "toReadChannel"
    }
})
robo.on('guildMemberAdd',member =>{
    message.send("testando ",member);
})