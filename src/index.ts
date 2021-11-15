import express from "express";
import swaggerUi from "swagger-ui-express";

import { usersRoutes } from "./routes/users.routes";
import swaggerOption from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOption));

app.use("/users", usersRoutes);

export { app };
