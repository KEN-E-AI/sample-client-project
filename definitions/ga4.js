const ga4 = require("@ken-e/dataform-ga4");

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
} = require("includes/project_variables");

const config = {
  enableSessions: true,
  enableItems: true,
  enableUsers: true,
  enableIntraday: dataform.projectConfig.vars.ga4IncludeIntraday === "true",

  startDate: dataform.projectConfig.vars.ga4StartDate,
  daysBack: Number(dataform.projectConfig.vars.ga4DaysBack),
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

ga4(config);
