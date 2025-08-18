import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TypeRacer API (BETA)",
  description: "TypeRacer API Documentation",
  outDir: "../docs",
  themeConfig: {
    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: '/getting_started' },
          { text: 'Authentication', link: '/authentication' },
          { text: 'Historical Data', link: '/historical_data' },
          { text: 'Errors', link: '/errors' },
          {
            text: 'Types',
            items: [
              { text: 'Date', link: '/types/Date' },
              { text: 'DateTime', link: '/types/DateTime' },
            ],
          },
          {
            text: 'Entities',
            items: [
              { text: 'Racer', link: '/entities/Racer' },
              { text: 'RacerStats', link: '/entities/RacerStats' },
              { text: 'PartialRacerStats', link: '/entities/PartialRacerStats' },
              { text: 'RaceResult', link: '/entities/RaceResult' },
              { text: 'Text', link: '/entities/Text' },
              { text: 'CompetitionResult', link: '/entities/CompetitionResult' },
            ]
          }
        ]
      },
      {
        text: 'Endpoints',
        items: [
          {
            text: 'Competitions',
            items: [
              { text: 'Get Current Competition Dates', link: '/endpoints/competitions/get_current_competition_dates' },
              { text: 'Get Competition Results', link: '/endpoints/competitions/get_competition_results' },
            ]
          },
          {
            text: 'Racers',
            items: [
              { text: 'Get Racer', link: '/endpoints/racers/get_racer' },
              { text: 'Get Racer Award Counts', link: '/endpoints/racers/get_racer_award_counts' },
              { text: 'Get Racer Award History', link: '/endpoints/racers/get_racer_award_history' },
              { text: 'Get Racer Race Result', link: '/endpoints/racers/get_racer_race_result' },
              { text: 'Get Racer Race Results', link: '/endpoints/racers/get_racer_race_results' },
              { text: 'Get Racer Stats', link: '/endpoints/racers/get_racer_stats' },
              { text: 'Get Racer Performance', link: '/endpoints/racers/get_racer_performance' },
              { text: 'Get Racer Historical Race Results', link: '/endpoints/racers/get_racer_historical_race_results' },
            ]
          },
          {
            text: 'Races',
            items: [
              { text: 'Get Latest Race Results', link: '/endpoints/races/get_race_results' },
              { text: 'Get Race Results For Race', link: '/endpoints/races/get_race_race_results' },
            ]
          },
          {
            text: 'Texts',
            items: [
              { text: 'Get Text', link: '/endpoints/texts/get_text' },
              { text: 'Get Race Results For Text', link: '/endpoints/texts/get_text_race_results' },
              // { text: 'Get Top Race Results For Text', link: '/endpoints/texts/get_text_top_results' },
            ]
          }
        ]
      }
    ],

    footer: {
      message: 'Shockwave',
      copyright: 'Copyright 2025 Shockwave, Inc.'
    }
  }
})