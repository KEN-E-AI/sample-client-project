// The single GA4 config for this project.
//
// Both definitions/ga4.js and includes/ga4_docs.js require this file, so the
// package and your own models describe the same columns. Per-client
// customizations live in includes/project_variables.js.

// Every ga4* var below must stay defined in workflow_settings.yaml: an
// undefined var overrides the package's own default with `undefined`.
const ga4DaysBack = Number(dataform.projectConfig.vars.ga4DaysBack);

const {
  customEventParams,
  customUserProps,
  customEventParamsFromUserProps,
  customQueryParams,
  conversionEventNames,
  customUserFields,
  customSessionFieldsFromEvents,
  customSessionFieldsFromSessions,
  customEventFields,
  customChannelGroupings,
  columnDescriptions,
} = require("includes/project_variables");

module.exports = {
  enableSessions: true,
  enableItems: true,
  enableUsers: true,
  enableIntraday: dataform.projectConfig.vars.ga4IncludeIntraday === "true",

  startDate: dataform.projectConfig.vars.ga4StartDate,
  daysBack: Number.isFinite(ga4DaysBack) ? ga4DaysBack : 3,
  timezone: dataform.projectConfig.vars.ga4Timezone,
  unwantedReferrals: dataform.projectConfig.vars.ga4UnwantedReferrals,

  conversionEventNames: conversionEventNames,
  customEventParams: customEventParams,
  customUserProps: customUserProps,
  customEventParamsFromUserProps: customEventParamsFromUserProps,
  customQueryParams: customQueryParams,
  customUserFields: customUserFields,
  customSessionFieldsFromEvents: customSessionFieldsFromEvents,
  customSessionFieldsFromSessions: customSessionFieldsFromSessions,
  customEventFields: customEventFields,
  customChannelGroupings: customChannelGroupings,
  columnDescriptions: columnDescriptions,

  sources: {
    database: dataform.projectConfig.vars.ga4SourceDatabase,
    schemas: dataform.projectConfig.vars.ga4SourceDataset,
  },
  target: {
    database: dataform.projectConfig.defaultDatabase,
    stagingSchema: dataform.projectConfig.vars.datasetStaging,
    outputSchema: dataform.projectConfig.vars.datasetOutput,
  },
};
