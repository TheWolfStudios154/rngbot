module.exports.run = (bot, message, args, discord) => {
    let em = new discord.RichEmbed()
    .setTitle("🎲 Your dice roll is: 🎲")
    .setDescription(Math.floor(Math.random() * 6))
    .setFooter(`${message.author.username}'s dice roll.`)
    .setColor("GREEN")

    message.channel.send({embed: em})

}

{
    module.exports.help = {
        name: "roll"
    }

}
