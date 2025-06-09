const meta_ads = require("@ken-e/dataform-meta-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      schema: "meta_ads",
    },
  ],
  target: {
    database: "ken-e-production",
  },
};

meta_ads(config);
