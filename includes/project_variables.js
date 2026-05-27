// GA4 custom event parameters
// Each entry pulls a value out of event_params into its own typed column.
// Supported types: string, int, double, float
const customEventParams = [
  // { param: "category", type: "string" },
  // { param: "step_number", type: "int" },
];

// GA4 custom user properties
// Each entry pulls a value out of user_properties into its own typed column on ga4_users.
const customUserProps = [
  // { param: "member_level", type: "string" },
];

// GA4 event params sourced from user properties
// Same shape as customEventParams, but the value is looked up in user_properties
// at event time instead of event_params.
const customEventParamsFromUserProps = [
  // { param: "is_logged_in", type: "string" },
];

// GA4 query parameters extracted from page_location
// Each entry pulls ?<param>=... out of page_location into its own column.
const customQueryParams = [
  // {
  //   param: "utm_source",
  //   description: "UTM source from page_location.",
  //   alias: "utm_source",
  // },
];

// GA4 conversion event names
const conversionEventNames = [
  // "purchase",
  // "generate_lead",
];

// GA4 custom user fields
// Raw SQL expressions injected into the ga4_users SELECT.
const customUserFields = [
  // `LOGICAL_OR(CASE WHEN event_name = 'page_view' AND REGEXP_CONTAINS(page_location, r'/account/') THEN TRUE ELSE FALSE END) AS existing_customer`,
];

// GA4 custom session fields evaluated inside the base_sessions aggregation.
// Reference event-level columns (event_name, event_params, traffic_type, etc).
const customSessionFieldsFromEvents = [
  // `SUM(CASE WHEN event_name = 'generate_lead' THEN 1 ELSE 0 END) AS totalSession_generateLeads`,
  // `SUM(CASE WHEN event_name = 'file_download' THEN 1 ELSE 0 END) AS totalSession_fileDownloads`,
];

// GA4 custom session fields evaluated at the session level.
// Reference session-level columns (landing_page, source, medium, etc).
const customSessionFieldsFromSessions = [
  // `REGEXP_CONTAINS(landing_page, '/blog') AS landed_on_blog`,
];

// GA4 custom event fields
// Raw SQL expressions added to the ga4_events SELECT.
const customEventFields = [
  // `CASE WHEN event_name = 'view_item' THEN TRUE ELSE FALSE END AS view_item_event`,
];

// GA4 custom channel groupings
// Each entry adds a column with a CASE expression that classifies a session
// into a channel. The group_function receives the source, medium, and campaign
// column expressions and must return a SQL CASE expression.
const customChannelGroupings = [
  // {
  //   group_name: "customGroup1",
  //   group_function: (source, medium, campaign) => `
  //     case
  //       when (${source} is null or ${source} in ('direct','(direct)','(not set)'))
  //         and (${medium} is null or ${medium} in ('(not set)', '(none)')) then 'Direct'
  //       when ${campaign} like '%cross-network%' then 'Cross-network'
  //     end
  //   `,
  // },
];

module.exports = {
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
};
