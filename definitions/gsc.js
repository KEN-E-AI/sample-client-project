const gsc = require("@ken-e/dataform-gsc");

const config = {
  startDate: "2024-01-01",
  sources: {
    database: "<CLIENT_SOURCE_PROJECT>",
    schemas: [
      "searchconsole_<SITE_NAME>",
      // Add additional Search Console properties here.
    ],
  },
  target: {
    database: dataform.projectConfig.defaultDatabase,
    sourceSchema: dataform.projectConfig.vars.datasetStaging,
    outputSchema: dataform.projectConfig.vars.datasetOutput,
  },
};

gsc(config);
