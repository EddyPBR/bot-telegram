import { Telegraf } from "telegraf";
import status from "./status";
import search from "./search";
import "dotenv/config";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Hello world"));

bot.command("status", async (ctx) => {
  try {
    const response = await status();

    if (response.status === 200) {
      await ctx.reply(`Google service: ✅`);
    } else {
      await ctx.reply(`Google service: ❌`);
    }
  } catch (error) {
    console.error(error);
  }
});

bot.command("search", async(ctx) => {
  try {
    await ctx.reply(`Hello we'll search a client for you, please put the name of the client.`);

    bot.on("text", async (ctx) => {
      const response = await search({ client_name: ctx.update.message.text});

      if (response.status === 200) {
        await ctx.reply(`${response.data.client_name}`);
      } else {
        await ctx.reply(`${response.data.error}`);
      }
    });
  } catch (error) {
    ctx.reply(`Error: ${error}`);
  }
})

const startBot = async () => {
  try {
    await bot.launch();
    console.log("BOT LISTENING")
  } catch (error) {
    console.error(error);
  }
};

export default(startBot);
