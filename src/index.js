import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import { connectDatabase } from "./config/db.js";
import routes from "./routes/ api.js";

connectDatabase();

const app = express();

app.use(cookieParser());
// app.use(
//   cors({
//     origin: [process.env.CLIENT_URL],
//     credentials: true,
//   }),
// );
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
