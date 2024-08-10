import express from "express";
import "dotenv/config";
import categories from "./routes/categories.mjs";
import cors from "cors";

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Something is up");
});

app.use("/categories", categories);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
