module.exports.run = (bot, message, args, discord) => {
    let em = new discord.RichEmbed()
    .setTitle("🎲 Your number is: 🎲")
    .setDescription(Math.floor(Math.random() * 500000))
    .setFooter(`${message.author.username}'s random number.`)
    .setColor("BLUE")

    message.channel.send({embed: em})

}

{
    module.exports.help = {
        name: "rng"
    }

}
