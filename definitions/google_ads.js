const google_ads = require("@ken-e/dataform-google-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      schema: "googleads_a00000X_<GOOGLE_ADS_CUSTOMER_ID>",
      customer_id: "<GOOGLE_ADS_CUSTOMER_ID>",
    },
  ],
  target: {
    database: "ken-e-production",
  },
};

google_ads(config);
