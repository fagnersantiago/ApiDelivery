import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { TokenIsMissing } from "../Error/jwtError/jwtTokenIsMissing";
import { InvalidToken } from "../Error/jwtError/jwtInvalidToken";

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
    throw new TokenIsMissing();
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
    throw new InvalidToken();
  }
}
