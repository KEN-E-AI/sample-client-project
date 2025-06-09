const ga4 = require("@ken-e/dataform-ga4");

const {
  customEventParams,
  conversionEventNames,
  customQueryParams,
} = require("includes/project_variables");

const config = {
  enableSessions: true,
  enableItems: true,
  enableUsers: true,
  customEventParams: customEventParams,
  customQueryParams: customQueryParams,
  startDate: "2021-06-01",
  conversionEventNames: conversionEventNames,
  contentGroups: ["1 as x", "2 as b"],
  customChannelGroupings: [
    {
      group_name: "customGroup1",
      group_function: (source, medium, campaign) => {
        return `
    
    case
      when (${source} is null or ${source} in ('direct','(direct)','(not set)')) and (${medium} is null or ${medium} in ('(not set)', '(none)')) then 'Direct'
      when ${campaign} like '%cross-network %' then 'Cross-network'
    end 
    
    `;
      },
    },
  ],
  sources: {
    database: "propeller-development",
    schemas: "google_analytics",
  },
  target: {
    database: "df-warehouse",
    stagingSchema: dataform.projectConfig.vars.datasetOutput,
  },
};

ga4(config);
