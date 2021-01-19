import { Telegraf } from "telegraf";
import "dotenv/config";
import commands from "./commands";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(`
  Hi, this a telegram bot created by @EddyPBR this is a simple CRUD, without authentication :(
  \nI know... sorry, but i hope than you enjoy it!
  \nNo more, how can i help you? - You can control me by sending these commands:\n
  /create - create a account\n
  /delete - delete a account\n
  /update - update a account\n
  /search - search a profile by ID\n
`)
);

bot.use(commands);

const startBot = async () => {
  try {
    await bot.launch();
    console.log("BOT LISTENING");
  } catch (error) {
    console.error(error);
  }
};

export default startBot;
