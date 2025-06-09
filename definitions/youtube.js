const youtube = require("@ken-e/dataform-youtube");

const config = {
  datasetStaging: "a00000X_yt_staging",
  datasetIntermediate: "a00000X_yt_intermediate",
  datasetOutput: "a00000X_yt_output",
  datasetExtras: "a00000X_yt_extras",
  daysBack: "7",
  startDate: "2024-09-01",
  titlesProject: "youtube-research-440316",
  titlesDataset: "yt_channel_development",
  titlesTable: "video_titles",
  playlistTable: "playlist_titles",
  sources: [
    {
      database: "<CLIENT_SOURCE_PROJECT>",
      schema: "youtube_channel",
      suffix: "_",
    },
  ],
  target: {
    database: "ken-e-production",
  },
};

// youtube(config);
