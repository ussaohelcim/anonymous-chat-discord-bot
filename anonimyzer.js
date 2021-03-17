botToken = ""//insert your bot token here
toSendChannel = ""//insert the channel id used to send messages here
toReadChannel = ""//insert the channel id used to read messages here

const Discord = require('discord.js');
const robo = new Discord.Client();
robo.login(botToken);

password = getRandomInt(50,220);

robo.on('ready', ()=>{//i dont know what is this, but this its called when the bot starts
    console.log("bot started");
})
robo.on('message', message =>{//i dont know what is this, but this its called when someone sends a message

    if(message.channel.id === toSendChannel)
    {//check if the message its on "toSendChannel"
        console.log(message.author.tag," said " ,message.content);//display in the console the message author and the message
        msg = encriptId(message.author.id)+" >: ```"+ message.content+"```";
        console.log(encriptId(message.author.id))
        message.delete();//delete the message
        robo.channels.cache.get(toReadChannel).send(msg);//send the message to the "toReadChannel"
    }

})
robo.on('guildMemberAdd',member =>{
    message.send("testando ",member);
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function encriptId(id)
{
    //32,255

    letras = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"]

    //lol, não sei como meche com arrays em javascript
    teste = id.replace(/0/g,"G")
    teste2 = teste.replace(/1/g,"@")
    teste3 = teste2.replace(/2/g,"T")
    teste4 = teste3.replace(/3/g,"3")
    teste5 = teste4.replace(/4/g,"u")
    teste6 = teste5.replace(/5/g,",")
    teste7 = teste6.replace(/6/g,"i")
    teste8 = teste7.replace(/7/g,"e")
    teste9 = teste8.replace(/8/g,"=")
    teste0 = teste9.replace(/9/g,"~")

    

    return teste0;
}