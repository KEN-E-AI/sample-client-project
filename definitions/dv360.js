const dv360 = require("@ken-e/dataform-dv360");

const config = {
  startDate: "2024-01-01",
  daysBack: 14,
  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      reportSchema: "dv360_<DV360_ADVERTISER_ID>_reports",
      reportTablePrefix: "<DV360_REPORT_PREFIX>",
      advertiser_id: "<DV360_ADVERTISER_ID>",
    },
  ],
  target: {
    database: dataform.projectConfig.defaultDatabase,
    stagingSchema: dataform.projectConfig.vars.datasetStaging,
    outputSchema: dataform.projectConfig.vars.datasetOutput,
  },
};

dv360(config);
