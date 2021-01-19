import app from "./app";
import startBot from "./services/bot";
import "dotenv/config";

startBot();

app.listen(process.env.PORT || 3000, () => {
  console.log(`SERVER LISTEN ON PORT: ${process.env.PORT || 3000}`);
});
