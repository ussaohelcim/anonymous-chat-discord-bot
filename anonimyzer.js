const conf = require("./config.json")
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(conf.TOKEN);

password = getRandomInt(1,30);

bot.on('ready', ()=>{
    //event called every time that bot is ready
    console.log("bot started");
    bot.user.setActivity("lulz pra todo lado");//"Playing "
})
bot.on('message', message =>{
/*event called every time that someone/something sends 
message to some server that the bot is */


    if(message.channel.id === conf.TOSENDCHANNEL)
    {//check if the actual message its on "toSendChannel"

        console.log(message.author.tag," said " ,message.content);
        //display in the console the message author and the message content

        msg = encryptId(message.author.id)+" >: ```"+ message.content+"```";
        //encrypt the id of the message author and put inside a code quote

        //console.log(encriptId(message.author.id))
        message.delete();//delete the message

        bot.channels.cache.get(conf.TOREADCHANNEL).send(msg);
        //send the message to the "toReadChannel"

    }
})
bot.on('guildMemberAdd',member =>{
    anonNickname(member)
    //bot.channels.cache.get(conf.TOREADCHANNEL).send();
})
bot.on('rateLimit',a =>{
    console.log("Rate limit reached.")
    console.log(a)
})

function getRandomInt(min, max) 
{//returns a pseudo-random number between "min" and "max"
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function encryptId(id)
{
    //32,255

    randomcharss = ["0","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
    "v","_","`","{","|","}","~","D","w","x","y","z","A","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","1","8","9","a","b","c","d","e","f","g","2",
    "#","$","%","&","'","(",")","*","+",",","-","B","C","Y","Z","!","G","H","I",
    "J",".","/",":",";","<","=",">","?","@","[","^","E","F","3","4","5","6","7",]
    arr = "";
    for (let index = 0; index < id.length; index++) {
        var txt = id[index];
        //console.log(txt)
        arr+=randomcharss[parseInt(txt,10)+password]
    }
    return arr;
}
function anonNickname(who)
{//set a new nickname for "who", with 24 pseudo-random numbers
    let nick = "";
    for (let index = 0; index <= 24; index++) {
        nick+= getRandomInt(0,9)
    }
    who.setNickname(nick)
}


let c = process.openStdin();//reads what you write at stdin

c.addListener('data',function(a){
    let t = a.toString();//the string that you writed
    bot.channels.cache.get(conf.TOREADCHANNEL).send(t);
    //send what you writed to the "to read channel"
})