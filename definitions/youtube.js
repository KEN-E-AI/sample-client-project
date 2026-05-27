const youtube = require("@ken-e/dataform-youtube");

const config = {
  startDate: "2024-01-01",
  daysBack: 10,

  // Lookup tables for video and playlist titles. Point these at the staging
  // dataset so the package can resolve title columns in its output layer.
  titlesProject: dataform.projectConfig.defaultDatabase,
  titlesDataset: dataform.projectConfig.vars.datasetStaging,
  titlesTable: "stg_yt_video_titles",
  playlistTable: "stg_yt_playlist_titles",

  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      schema: "youtube_channel",
      suffix: "_",
    },
  ],
  target: {
    database: dataform.projectConfig.defaultDatabase,
    stagingSchema: dataform.projectConfig.vars.datasetStaging,
    outputSchema: dataform.projectConfig.vars.datasetOutput,
  },
};

youtube(config);
