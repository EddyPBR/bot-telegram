import { Telegraf } from "telegraf";
import status from "./status";
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

const startBot = async () => {
  try {
    await bot.launch();
  } catch (error) {
    console.error(error);
  }
};

startBot();
