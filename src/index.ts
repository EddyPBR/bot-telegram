import app from "./app";
import "dotenv/config";

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listen on PORT: ${process.env.PORT || 3000}`);
});
