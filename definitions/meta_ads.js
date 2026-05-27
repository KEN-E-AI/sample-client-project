const meta_ads = require("@ken-e/dataform-meta-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      schema: "airbyte_facebook_<META_AD_ACCOUNT_ID>",
    },
    // Add additional Meta Ads accounts here if the client has more than one.
  ],
  target: {
    database: dataform.projectConfig.defaultDatabase,
    stagingSchema: dataform.projectConfig.vars.datasetStaging,
    outputSchema: dataform.projectConfig.vars.datasetOutput,
  },
};

meta_ads(config);
