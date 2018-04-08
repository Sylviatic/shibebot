const Discord = require("discord.js");

const TOKEN = "NDMyNjEyMDY2MjczMDAxNDgy.Dav08A.MWyew5Brlcm2qkXvH8Wk2piJsjc";

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