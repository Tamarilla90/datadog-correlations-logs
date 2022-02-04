import mongoose from "mongoose";
import config from "../config/default";
import log from "../logger";

async function connectMongo() {
  const dbUri = config.dbUri as string;
  try {
      await mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });
      log.info("Database connected");
  } catch (error) {
      log.error(`db error ${error as Error}`);
      throw error;
  }
}

export default connectMongo;
