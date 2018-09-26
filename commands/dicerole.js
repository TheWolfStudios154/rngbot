module.exports.run = (bot, message, args, discord) => {
 let em = new discord.RichEmbed()
  .setTitle("🎲 Dice Roll 🎲")
  .setDescription("Role a Dice!")
  .addField(Math.floor(Math.random()*6))
  message.channel.send({embed: em})
}

{
    module.exports.help = {
        name: "rng"
    }

}
