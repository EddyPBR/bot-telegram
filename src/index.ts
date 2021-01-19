import app from "./app";
import startBot from  "./resources/bot";
import "dotenv/config";

startBot(); // starts bot

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listen on PORT: ${process.env.PORT || 3000}`);
});
