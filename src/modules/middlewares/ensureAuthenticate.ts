import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { InvalidToken } from "../Error/jwtError/jwtInvalidToken";
import { TokenIsMissing } from "../Error/jwtError/jwtTokenIsMissing";

interface IPayload {
  sub: string;
}

export async function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeaders = request.headers.authorization;
  //verifica se o token existe
  if (!authHeaders) {
    throw new TokenIsMissing();
  }
  //verifica se o token enviado pelo header é válido
  const [, token] = authHeaders.split(" ");

  try {
    const { sub } = verify(token, String(process.env.CLIENT_TOKEN)) as IPayload;
    request.id_client = sub;
    next();
  } catch (error) {
    throw new InvalidToken();
  }
}
