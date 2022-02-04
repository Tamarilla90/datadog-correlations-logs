import { Request, Response } from 'express';
import { omit } from 'lodash';
import { createUser } from '../domain/user.domain';
import log from '../logger';

export async function createUserHandler(req: Request, res: Response) {
  try {
    log.info(`Prueba: Create user con email: ${req.body?.email}`);
    const user = await createUser(req.body);
    return res.send(omit(user.toJSON(), 'password'));
  } catch (e) {
    const error = e as Error;
    log.error(error);
    return res.status(409).send(error.message);
  }
}
