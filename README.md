# Propeller — Sample Client Project

A [Dataform](https://cloud.google.com/dataform) project template for building an
integrated marketing data warehouse in BigQuery.

Propeller is a suite of Dataform packages — published under the `@ken-e/*` npm
scope — that each transform raw data from one MarTech source (GA4, Google Ads,
Meta Ads, Bing Ads, Google Search Console, YouTube, DV360) into clean, modeled
BigQuery tables. **This repository is the account template**: you clone it to
bootstrap a new project, then replace the placeholder values with your own
BigQuery project, account ID, and per-source identifiers.

> [!IMPORTANT]
> The `@ken-e/*` packages this template depends on are **proprietary and
> require a paid subscription**. This template is public so you can see how a
> project is wired together, but `npm install` will fail without access to the
> packages. See [Getting access](#getting-access) below.

## How it works

Each data source is configured in its own file under `definitions/`, which
requires the relevant package and calls it with a config object. Every package
follows a two-layer model:

1. **Staging (`stg_*`)** — reads the raw BigQuery Data Transfer tables and
   normalizes them.
2. **Output** — reads from staging, joins lookups, computes derived metrics, and
   deduplicates into the final tables.

The packages **read** raw tables that the
[BigQuery Data Transfer Service](https://cloud.google.com/bigquery/docs/dts-introduction)
(or a similar pipeline) must already be populating — they do not ingest data
themselves.

## Requirements

- **Node.js** and **npm**
- The **Dataform CLI** (`npm i -g @dataform/cli`) or a Dataform workspace in
  Google Cloud
- A **Google Cloud project with BigQuery** enabled
- **Raw source tables already being populated** by the BigQuery Data Transfer
  Service (one transfer per source you intend to model)
- A **paid subscription** granting access to the `@ken-e/*` packages
  (see below)

## Getting access

The `@ken-e/*` packages are private npm packages. Access is granted to
subscribers after signing a commercial agreement with Ken-E AI. To request
access, contact **ken@ken-e.ai**.

Once your npm account has been granted access, create an npm
[access token](https://docs.npmjs.com/creating-and-viewing-access-tokens) and
expose it to the project. This repo's `.npmrc` reads the token from the
`DATAFORM_NPM_TOKEN` environment variable:

```bash
export DATAFORM_NPM_TOKEN=<your-npm-token>
```

## Quickstart

```bash
# 1. Clone
git clone https://github.com/KEN-E-AI/sample-client-project.git my-client
cd my-client

# 2. Authenticate to the private packages (see "Getting access")
export DATAFORM_NPM_TOKEN=<your-npm-token>

# 3. Install
npm install

# 4. Set up BigQuery credentials for the Dataform CLI
dataform init-creds        # writes .df-credentials.json (git-ignored)

# 5. Replace the placeholder values (see "Configure for your project")

# 6. Compile and review the generated SQL
dataform compile
```

> A fresh clone ships with placeholder values and **will not compile until you
> customize it** — a failing first `dataform compile` is expected, not a bug.

## Configure for your project

Replace the template's placeholders, in roughly this order. The full,
step-by-step guide lives in [`CLAUDE.md`](./CLAUDE.md); the essentials are:

| Placeholder | Where | Replace with |
|---|---|---|
| `a00000X` | `workflow_settings.yaml` | Your account ID, e.g. `a000004` (datasets are named `<id>_staging` / `<id>_output`) |
| `<CLIENT_SOURCE_PROJECT>` | `workflow_settings.yaml`, `definitions/*.js` | The BigQuery project holding your raw Data Transfer datasets |
| `analytics_XXXXXXXXX` | `workflow_settings.yaml` | Your GA4 BigQuery export dataset |
| `<GOOGLE_ADS_CUSTOMER_ID>` | `definitions/google_ads.js` | Your Google Ads customer ID |
| `<META_AD_ACCOUNT_ID>` | `definitions/meta_ads.js` | Your Meta ad account ID |
| `<SITE_NAME>` | `definitions/gsc.js` | Each Search Console property |
| `<DV360_ADVERTISER_ID>`, `<DV360_REPORT_PREFIX>` | `definitions/dv360.js` | Your DV360 advertiser/report identifiers |

Per-client GA4 customizations (custom event params, conversions, channel
groupings, etc.) live in `includes/project_variables.js` — they ship empty and
commented out.

**Don't need a source?** Delete its file in `definitions/` and remove the
dependency from `package.json`.

## Project layout

```
definitions/            One file per data source — requires a package and configures it
  ga4.js  google_ads.js  meta_ads.js  bing_ads.js  gsc.js  youtube.js  dv360.js
includes/
  project_variables.js  Per-client GA4 customizations (custom params, conversions, ...)
workflow_settings.yaml  Dataform project settings, BigQuery datasets, shared vars
package.json            Pinned @ken-e/* package versions
.npmrc                  Points the @ken-e scope at npm and reads DATAFORM_NPM_TOKEN
CLAUDE.md               Detailed customization guide
```

## Packages included

| Package | Version |
|---|---|
| `@ken-e/dataform-ga4` | 0.0.16 |
| `@ken-e/dataform-google-ads` | 0.0.20 |
| `@ken-e/dataform-meta-ads` | 0.0.22 |
| `@ken-e/dataform-bing-ads` | 0.0.13 |
| `@ken-e/dataform-gsc` | 0.0.13 |
| `@ken-e/dataform-youtube` | 0.0.12 |
| `@ken-e/dataform-dv360` | 0.0.3 |
| `@dataform/core` | 3.0.35 |

Packages are versioned `0.0.x` (pre-1.0, active development); the config APIs
may change between releases. Pin exact versions — no `^` or `~` ranges.

## License

This template (the wiring, configuration, and documentation in this repository)
is licensed under the **Apache License 2.0** — see [`LICENSE`](./LICENSE).

The `@ken-e/*` Dataform packages it depends on are **proprietary** and are
**not** covered by that license; they are distributed privately to subscribers
under a separate commercial agreement.

## Support

For package access, subscriptions, or questions, contact **ken@ken-e.ai**.
