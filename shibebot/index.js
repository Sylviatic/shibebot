const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ready");
    bot.user.setGame("bOI");
});

bot.on("message", function(message) {
    console.log(message.content);
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "hello") {
        message.channel.sendMessage("Hi!");
    }
});

bot.login(process.env.bot.TOKEN);
