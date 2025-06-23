const youtube = require("@ken-e/dataform-youtube");

const config = {
  datasetStaging: "df_ytchannel_staging",
  datasetIntermediate: "df_ytchannel_intermediate",
  datasetOutput: "df_ytchannel_output",
  datasetExtras: "df_ytchannel_extras",
  daysBack: "7",
  startDate: "2024-09-01",
  titlesProject: "df-warehouse",
  titlesDataset: "df_warehouse_youtube",
  titlesTable: "video_titles",
  playlistTable: "playlist_titles",
  sources: [
    {
      database: "propeller-development",
      schema: "youtube_channel_test",
      suffix: "_",
    },
  ],
  target: {
    database: "df-warehouse",
  },
};

youtube(config);
