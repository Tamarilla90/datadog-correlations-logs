import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../models/user.model";
import log from "../logger";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    log.info(`Prueba: Create user in bbdd con email: ${input?.email}`);
    return await User.create(input);
  } catch (error) {
    // @ts-ignore
    log.error(`Prueba: Error to create user in bbdd con email: ${input?.email}`);
    throw new Error(error as string);
  }
}
