import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}
export async function ensureAtuhenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeaders = await request.headers.authorization;

  if (!authHeaders) {
    return response.status(401).json({
      message: "Token is missing",
    });
  }

  const [, token] = authHeaders.split(" ");

  try {
    const { sub } = verify(
      token,
      String(process.env.DELIVERYMAN_TOKEN)
    ) as IPayload;

    request.id_deliveryman = sub;

    next();
  } catch (error) {
    return response.status(401).json({
      message: "Invalid Token",
    });
  }
}
