import { writable } from "svelte/store";

export const teams = writable([
  {
    id: 33,
    league: 39,
    season: 2020,
    name: "Manchester United",
    logo: "https://media.api-sports.io/football/teams/33.png",
    statistics: {
      goals: {
        for: {
          total: {
            home: 40,
            away: 26,
            total: 66,
          },
          average: {
            home: "2.1",
            away: "1.4",
            total: "1.7",
          },
        },
        against: {
          total: {
            home: 17,
            away: 19,
            total: 36,
          },
          average: {
            home: "0.9",
            away: "1.0",
            total: "0.9",
          },
        },
      },
      fixtures: {
        played: {
          home: 19,
          away: 19,
          total: 38,
        },
        wins: {
          home: 10,
          away: 8,
          total: 18,
        },
        draws: {
          home: 7,
          away: 5,
          total: 12,
        },
        loses: {
          home: 2,
          away: 6,
          total: 8,
        },
      },
    },
  },
  {
    id: 33,
    league: 39,
    season: 2020,
    name: "Manchester United",
    logo: "https://media.api-sports.io/football/teams/33.png",
    statistics: {
      goals: {
        for: {
          total: {
            home: 40,
            away: 26,
            total: 66,
          },
          average: {
            home: "2.1",
            away: "1.4",
            total: "1.7",
          },
        },
        against: {
          total: {
            home: 17,
            away: 19,
            total: 36,
          },
          average: {
            home: "0.9",
            away: "1.0",
            total: "0.9",
          },
        },
      },
      fixtures: {
        played: {
          home: 19,
          away: 19,
          total: 38,
        },
        wins: {
          home: 10,
          away: 8,
          total: 18,
        },
        draws: {
          home: 7,
          away: 5,
          total: 12,
        },
        loses: {
          home: 2,
          away: 6,
          total: 8,
        },
      },
    },
  },
]);