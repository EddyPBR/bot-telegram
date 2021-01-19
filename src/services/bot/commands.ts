import { Telegraf } from "telegraf";
import "dotenv/config";

const bot = new Telegraf(process.env.BOT_TOKEN);

import UserCommands from "./commands/User";
const userCommands = new UserCommands();

bot.command("search", async (ctx): Promise<void> => {
  ctx.reply(
    `>>> Please put the name of the user.`
  );

  bot.on("text", async (ctx) => {
    const response = await userCommands.search({
      client_name: ctx.update.message.text,
    });

    if (response.status === 200) {
      ctx.reply(`
        RESPONSE:\n
        ID: ${response.data._id}
        NAME: ${response.data.client_name}
        \n
      `);
    } else {
      ctx.reply(`
        RESPONSE:\n
        ERROR: ${response.data.error}
      `);
    }
  }); 

  return;
});

bot.command("create", async (ctx): Promise<void> => {
  ctx.reply(
    `need create a function to create a user`
  );

  return;
});

bot.command("update", async (ctx): Promise<void> => {
  ctx.reply(
    `need create a function to update a user`
  );

  return;
});

bot.command("delete", async (ctx): Promise<void> => {
  ctx.reply(
    `need create a function to delete a user`
  );

  return;
});

export default bot;
