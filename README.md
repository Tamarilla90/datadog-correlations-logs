# DataDog Correlations Logs with Pino

This project show to connect dd-trace of datadog with pino logger use docker-compose.

## Requirements

To work correctly, you will first need:
    - Api key of datadog. You can create a trial account

## Run docker

I created a docker-compose to up a node service and datadog agent to connnect logs and traces to datadog trial account.

You only have change de api key of datadog in docker-compose.yml and run:

```
 docker-compose up
```

## Use

If you enter in you [ui of datadog](https://app.datadoghq.eu/help/quick_start) you can see the traces, logs and corrections between.

### Endpoint to proof logs and traces

There is a unique endpoint to proof this. You can see in [swagger](./api/swagger.yml)

