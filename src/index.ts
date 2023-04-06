import express from "express";
import appConfig from "./app";
import environmentVariables from "./configurations/environmentVariables";
import dbConfig from "./configurations/database";

const app = express();

appConfig(app);

dbConfig();

app.listen(environmentVariables.PORT, () => {
  console.log(`server running on port ${environmentVariables.PORT}`);
});
