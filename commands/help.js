module.exports.run = (bot, message, args, discord) => {
  let em = new discord.RichEmbed()
  .setTitle("RNG Help Command.")
  .setDescription("This is a list of RNGBot's commands!!")
  .addField("Number Commands.", ".rng, .roll")
  .addField("Owner only commands.", ".eval")
  
  message.channel.send({embed: em})
}

{
    module.exports.help = {
        name: "help"
    }

}
