import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { AppError } from "./modules/Error/appError";
import { routes } from "./routes";
const app = express();

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
);

app.listen(3000, () => {
  console.log("server is running");
});
