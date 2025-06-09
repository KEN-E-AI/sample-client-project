const google_ads = require("@ken-e/dataform-google-ads");

const config = {
  startDate: "2024-01-01",
  sources: [
    {
      database: "ken-e-staging",
      schema: "googleads_a000000_2394435448",
      customer_id: "2394435448",
    },
  ],
  target: {
    database: "df-warehouse",
  },
};

google_ads(config);
