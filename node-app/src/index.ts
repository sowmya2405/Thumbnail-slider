import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";

import { templates } from "./templates";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));

app.get("/templates", (req, res) => {
  res.json(templates);
});

app.use("/images", express.static("images"));

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
