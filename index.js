const Discord = require("discord.js");
const { mongo } = require("./modules/database");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] });

client.on("ready", () => {
    console.log("Ready!");

    await mongo.connect();
    console.log("Connected to MongoDB!");
});

client.login("secret token");