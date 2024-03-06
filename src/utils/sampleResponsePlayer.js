export const sampleResponsePlayer = {
  get: "transfers",
  parameters: {
    player: "80909",
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1,
  },
  response: [
    {
      player: {
        id: 80909,
        name: "Obafemi Akinwunmi Martins",
      },
      update: "2021-02-10T11:07:05+00:00",
      transfers: [
        {
          date: "2020-09-20",
          type: "Free",
          teams: {
            in: {
              id: 1434,
              name: "Wuhan Zall",
              logo: "https://media.api-sports.io/football/teams/1434.png",
            },
            out: {
              id: 833,
              name: "Shanghai Shenhua",
              logo: "https://media.api-sports.io/football/teams/833.png",
            },
          },
        },
        {
          date: "2016-02-18",
          type: "€ 2.7M",
          teams: {
            in: {
              id: 833,
              name: "Shanghai Shenhua",
              logo: "https://media.api-sports.io/football/teams/833.png",
            },
            out: {
              id: 1595,
              name: "Seattle Sounders",
              logo: "https://media.api-sports.io/football/teams/1595.png",
            },
          },
        },
        {
          date: "2013-03-15",
          type: "Free",
          teams: {
            in: {
              id: 1595,
              name: "Seattle Sounders",
              logo: "https://media.api-sports.io/football/teams/1595.png",
            },
            out: {
              id: 539,
              name: "Levante",
              logo: "https://media.api-sports.io/football/teams/539.png",
            },
          },
        },
        {
          date: "2012-09-13",
          type: "Free",
          teams: {
            in: {
              id: 539,
              name: "Levante",
              logo: "https://media.api-sports.io/football/teams/539.png",
            },
            out: {
              id: 1083,
              name: "Rubin",
              logo: "https://media.api-sports.io/football/teams/1083.png",
            },
          },
        },
        {
          date: "2011-01-28",
          type: "Loan",
          teams: {
            in: {
              id: 54,
              name: "Birmingham",
              logo: "https://media.api-sports.io/football/teams/54.png",
            },
            out: {
              id: 1083,
              name: "Rubin",
              logo: "https://media.api-sports.io/football/teams/1083.png",
            },
          },
        },
        {
          date: "2010-07-01",
          type: "€ 9M",
          teams: {
            in: {
              id: 1083,
              name: "Rubin",
              logo: "https://media.api-sports.io/football/teams/1083.png",
            },
            out: {
              id: 161,
              name: "VfL Wolfsburg",
              logo: "https://media.api-sports.io/football/teams/161.png",
            },
          },
        },
        {
          date: "2009-07-31",
          type: "€ 10.5M",
          teams: {
            in: {
              id: 161,
              name: "VfL Wolfsburg",
              logo: "https://media.api-sports.io/football/teams/161.png",
            },
            out: {
              id: 34,
              name: "Newcastle",
              logo: "https://media.api-sports.io/football/teams/34.png",
            },
          },
        },
        {
          date: "2006-08-01",
          type: "€ 15M",
          teams: {
            in: {
              id: 34,
              name: "Newcastle",
              logo: "https://media.api-sports.io/football/teams/34.png",
            },
            out: {
              id: 505,
              name: "Inter",
              logo: "https://media.api-sports.io/football/teams/505.png",
            },
          },
        },
      ],
    },
  ],
};
