import {tracer, TracerOptions} from 'dd-trace';
import config from "../config/default";

tracer.init({
  env: config.datadog.env,
  service: config.datadog.service,
  version: config.datadog.version,
  logInjection: config.datadog.logInjection,
  hostname: config.datadog.hostname,
  port: config.datadog.port
} as TracerOptions);

import pino from 'pino';
const log = pino();
export default log;
