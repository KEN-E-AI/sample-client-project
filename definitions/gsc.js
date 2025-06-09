const gsc = require("@ken-e/dataform-gsc");

const config = {
  startDate: "2025-01-01",
  sources: {
    database: "<CLIENT_SOURCE_PROJECT>",
    schemas: [
      "searchconsole_a00000X_<SITE_NAME>",
      "searchconsole_a00000X_<SITE_NAME>_copy",
    ],
  },
  target: {
    database: "ken-e-production",
  },
};

gsc(config);
