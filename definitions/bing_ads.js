const bing_ads = require("@ken-e/dataform-bing-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      schema: "airbyte_bing",
    },
  ],
  target: {
    database: dataform.projectConfig.defaultDatabase,
    stagingSchema: dataform.projectConfig.vars.datasetStaging,
    outputSchema: dataform.projectConfig.vars.datasetOutput,
  },
};

bing_ads(config);
