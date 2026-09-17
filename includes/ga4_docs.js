// The column descriptions the GA4 package applies, for reuse on your own
// models built on top of its tables:
//
//   config {
//     type: "view",
//     columns: {
//       ...ga4_docs.sessions,
//       session_intent: "Informational vs transactional, from landing page.",
//     },
//   }
//
// Keys that don't match a column in your model are ignored. Returns
// { stagingEvents, events, items, sessions, users }.

// The package validates descriptions here, so a compile error naming this file
// is almost always a mistake in `columnDescriptions` in project_variables.js.

const ga4 = require("@ken-e/dataform-ga4");

module.exports = ga4.getColumnDescriptions(require("includes/ga4_config"));
