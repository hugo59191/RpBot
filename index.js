const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("RpBot!")

bot.on('ready', function() {
    bot.user.setUsername("RpBot")
    bot.user.setPresence({ game: { name: 'Griller des mages con'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if(message.content.startsWith("teste²")){
        message.channel.send(`**${message.author.username}** lance le teste avec style`,{
    })
}
}
)
