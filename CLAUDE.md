# CLAUDE.md — sample-client-project

## Overview

This is the Propeller account template. Clone it to bootstrap a new client's
Dataform project, then replace the placeholder values with the client's real
BigQuery project, account ID, and per-source identifiers.

## Package dependencies

| Package | Version | Definition file |
|---------|---------|----------------|
| @ken-e/dataform-ga4 | 0.0.16 | definitions/ga4.js |
| @ken-e/dataform-google-ads | 0.0.20 | definitions/google_ads.js |
| @ken-e/dataform-meta-ads | 0.0.22 | definitions/meta_ads.js |
| @ken-e/dataform-bing-ads | 0.0.13 | definitions/bing_ads.js |
| @ken-e/dataform-gsc | 0.0.13 | definitions/gsc.js |
| @ken-e/dataform-youtube | 0.0.12 | definitions/youtube.js |
| @ken-e/dataform-dv360 | 0.0.3 | definitions/dv360.js |

Versions match the most recent live account at the time the template was
refreshed. Re-run `/upgrade-package` from the propeller root after cloning
if newer versions have shipped.

## Customize for a new client

The template ships with placeholder values that will not compile against
real data. Replace them in the following order.

### 1. Account ID and BigQuery datasets

Replace `a00000X` with the new client's account number (e.g. `a000004`)
across:

- `workflow_settings.yaml` — `defaultDataset`, `defaultAssertionDataset`,
  `datasetStaging`, `datasetOutput`, `datasetExtras`

The convention is `<account_id>_staging` and `<account_id>_output`, both in
the `ken-e-production` project.

### 2. Source BigQuery project

Replace `<CLIENT_SOURCE_PROJECT>` with the project that holds the client's
raw data transfer datasets (often a client-owned project, e.g.
`acme-marketing`). Appears in:

- `workflow_settings.yaml` — `ga4SourceDatabase`
- `definitions/google_ads.js`, `meta_ads.js`, `bing_ads.js`, `gsc.js`,
  `youtube.js`, `dv360.js` — `sources[].database`

### 3. Per-source identifiers

Each definition file has placeholders for the per-source IDs:

| File | Placeholders to replace |
|------|------------------------|
| `definitions/ga4.js` | `analytics_XXXXXXXXX` in `workflow_settings.yaml` |
| `definitions/google_ads.js` | `<GOOGLE_ADS_CUSTOMER_ID>` |
| `definitions/meta_ads.js` | `<META_AD_ACCOUNT_ID>` |
| `definitions/bing_ads.js` | `airbyte_bing` (rename if Airbyte stream name differs) |
| `definitions/gsc.js` | `<SITE_NAME>` for each Search Console property |
| `definitions/youtube.js` | `youtube_channel` (rename if BQ transfer dataset differs) |
| `definitions/dv360.js` | `<DV360_ADVERTISER_ID>`, `<DV360_REPORT_PREFIX>` |

Multi-source clients (multiple Google Ads accounts, multiple FB ad accounts,
multiple GSC properties) should add additional objects to the `sources` array.

### 4. GA4 customizations

`includes/project_variables.js` is where per-client GA4 logic lives. All the
arrays ship empty/commented. Uncomment and adapt:

- `customEventParams` — extract event_params into typed columns
- `customUserProps` — extract user_properties into typed columns on ga4_users
- `customEventParamsFromUserProps` — event-time user property lookups
- `customQueryParams` — extract URL query string parameters
- `conversionEventNames` — event names treated as conversions
- `customUserFields`, `customEventFields` — raw SQL expressions
- `customSessionFieldsFromEvents` / `customSessionFieldsFromSessions` —
  session-level aggregations (the package splits these by whether the
  expression references event-level or session-level columns)

### 5. Remove unused packages

If the client does not need a source, delete the corresponding file in
`definitions/` and remove the dependency from `package.json`.

### 6. Validate

```bash
npm install
dataform compile
```

## Conventions

- Pin exact package versions (no `^` or `~`).
- BigQuery datasets are prefixed with the account ID: `a00000X_staging`,
  `a00000X_output`.
- The default BigQuery project is `ken-e-production`. Client source data
  usually lives in a separate, client-owned project.
- GSC uses `target.sourceSchema`, not `stagingSchema` — this is a quirk of
  the GSC package's config API.
