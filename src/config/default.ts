const parseBoolean = (data: string | undefined) => {
  return !!data && data === 'true' ? true : false;
}

export default {
  port: 3000,
  host: "localhost",
  dbUri: process.env.DB || "mongodb://localhost:27017/test",
  datadog: {
    env: process.env.ENV || 'localhost',
    service: process.env.SERVICE || 'data-correlations-logs',
    version: process.env.DD_VERSION || '1.0.0',
    logInjection: parseBoolean(process.env.DD_LOGS_INJECTION) || true,
    hostname: process.env.DD_HOST || 'datadog-agent',
    port: 8126,
  }
};


