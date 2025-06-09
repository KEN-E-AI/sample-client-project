const gsc = require("@ken-e/dataform-gsc");

const config = {
  startDate: "2025-01-01",
  sources: {
    database: "ken-e-staging",
    schemas: [
      "searchconsole_a000000_openlines",
      "searchconsole_a000000_openlines_copy",
    ],
  },
  target: {
    database: "df-warehouse",
  },
};

gsc(config);
