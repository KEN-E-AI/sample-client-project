const meta_ads = require("@ken-e/dataform-meta-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "propeller-development",
      schema: "meta_ads",
    },
  ],
  target: {
    database: "df-warehouse",
  },
};

meta_ads(config);
