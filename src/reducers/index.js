import { combineReducers } from "redux";

const playerReducer = () => {
  return [
    {
      title: "ESTHER",
      description: "TIME SURVIVED",
      img:
        "https://images.ctfassets.net/f3hviu5d3v7j/5RS02zKzDMgRCB5cHmiv7j/2dc6de87746228674b2a6f7a2f93a3a8/GEN_Pio-1-resized.png",
      AvgKills: "1.33",
      AvgDamage: "190",
      TimeSurvived: "22 min 38 sec",
      Rank: "1",
      Team: "GEN.G",
      Points: "111",
      Kills: "69",
      PlacementPoints: "42",
    },
    {
      title: "4AM_FOREVER",
      description: "MOST KILLS",
      img:
        "https://images.ctfassets.net/f3hviu5d3v7j/5OqF6rNDaWKCLtg0r8LULW/c781810b9dffbc25206b986f218e1922/4AM_FOREVER-resized.png",
      AvgKills: "1.92",
      AvgDamage: "325",
      TimeSurvived: "21 min 15 sec",
      Rank: "3",
      Team: "Four Angry Men",
      Points: "99",
      Kills: "60",
      PlacementPoints: "39",
    },
    {
      title: "4AM_FOREVERR",
      description: "MOST DBNO",
      img:
        "https://images.ctfassets.net/f3hviu5d3v7j/5OqF6rNDaWKCLtg0r8LULW/c781810b9dffbc25206b986f218e1922/4AM_FOREVER-resized.png",
      AvgKills: "1.92",
      AvgDamage: "325",
      TimeSurvived: "21 min 15 sec",
      Rank: "2",
      Team: "Faze Clan",
      Points: "101",
      Kills: "55",
      PlacementPoints: "46",
    },
    {
      title: "PIO",
      description: "MOST DAMAGE",
      img:
        "https://images.ctfassets.net/f3hviu5d3v7j/1o2Mj2HcPZxdlPfrn7eCby/ebb761e6a79d462777152d44bcbf8358/GEN_Esther-1-resized.png",
      AvgKills: "1.83",
      AvgDamage: "339",
      TimeSurvived: "22 min 15 sec",
      Rank: "4",
      Team: "OGN ENTUS FORCE",
      Points: "89",
      Kills: "52",
      PlacementPoints: "37",
    },
  ];
};

const selectedPlayerReducer = (selectedPlayer = null, action) => {
  if (action.type === "PLAYER_SELECTED") {
    return action.payload;
  }
  return selectedPlayer;
};

export default combineReducers({
  players: playerReducer,
  selectedPlayer: selectedPlayerReducer,
});
