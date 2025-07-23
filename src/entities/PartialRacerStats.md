# PartialRacerStats

An entity representing the stats of a Racer in a given Universe for a given window of time

## Fields

| Field         | Type           | Description                                                  |
|---------------|----------------|--------------------------------------------------------------|
| `username`    | string         | The username of the Racer the Stats are for                  |
| `universe`    | string         | The name of the Universe the Stats are for                   |
| `total_races` | number         | The total number of races for the Stats                      |
| `total_wins`  | number         | The total number of races won for the Stats                  |
| `points`      | number \| null | The points accumulated for the Stats                         |
| `avg_wpm`     | number \| null | The average words per minute for the Stats                   |
| `best_wpm`    | number \| null | The best words per minute for the Stats                      |
| `kind`        | string         | The kind of partial Stats these are (day, week, month, year) |
| `start`       | DateTime       | The start time of the period the Stats are for               |
| `end`         | DateTime       | The end time of the period the Stats are for                 |