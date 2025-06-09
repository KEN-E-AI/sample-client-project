const bing_ads = require("@ken-e/dataform-bing-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      schema: "bing",
    },
  ],
  target: {
    database: "ken-e-production",
  },
};

bing_ads(config);
