const conf = require("./config.json")


const Discord = require('discord.js');
const robo = new Discord.Client();

robo.login(conf.TOKEN);

password = getRandomInt(1,30);

messages = []

robo.on('ready', ()=>{//i dont know what is this, but this its called when the bot starts
    console.log("bot started");
    robo.user.setActivity("lulz pra todo lado");
})
robo.on('message', message =>{//i dont know what is this, but this its called when someone sends a message

    if(message.channel.id === conf.TOSENDCHANNEL)
    {//check if the message its on "toSendChannel"
        console.log(message.author.tag," said " ,message.content);//display in the console the message author and the message
        msg = encriptId(message.author.id)+" >: ```"+ message.content+"```";
        console.log(encriptId(message.author.id))
        message.delete();//delete the message
        robo.channels.cache.get(conf.TOREADCHANNEL).send(msg);//send the message to the "toReadChannel"
        messages.unshift(msg)
    }
})
robo.on('guildMemberAdd',member =>{
    message.send("testando ",member);
})
robo.on('rateLimit',a =>{
    console.log(a)
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function encriptId(id)
{
    //32,255

    randomcharss = ["0","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","_","`","{","|","}","~","D","w","x","y","z","A","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","1","8","9","a","b","c","d","e","f","g","2","#","$","%","&","'","(",")","*","+",",","-","B","C","Y","Z","!","G","H","I","J",".","/",":",";","<","=",">","?","@","[","^","E","F","3","4","5","6","7",]
    arr = "";
    for (let index = 0; index < id.length; index++) {
        var txt = id[index];
        //console.log(txt)
        arr+=randomcharss[parseInt(txt,10)+password]
    }

    return arr;
}
let teste = process.openStdin()
teste.addListener('data',function(a){
    let t = a.toString()
    robo.channels.cache.get(conf.TOREADCHANNEL).send(t);
})
