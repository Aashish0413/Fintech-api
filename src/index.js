import cookieParser from "cookie-parser";
import "dotenv/config";
import express from "express";
import { connectDatabase } from "./config/db.js";
import routes from "./routes/api.js"

// swagger import 
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";


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

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
  console.log("Swagger docs: http://localhost:8080/api-docs");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
