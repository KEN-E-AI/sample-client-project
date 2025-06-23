const bing_ads = require("@ken-e/dataform-bing-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "propeller-development",
      schema: "airbyte_bing_2",
    },
  ],
  target: {
    database: "df-warehouse",
  },
};

bing_ads(config);
