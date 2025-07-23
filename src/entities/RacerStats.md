# RacerStats

An entity representing the all time stats of a Racer in a given Universe

## Fields

| Field         | Type           | Description                                                |
|---------------|----------------|------------------------------------------------------------|
| `username`    | string         | The username of the Racer the Stats are for                |
| `universe`    | string         | The name of the Universe the Stats are for                 |
| `total_races` | number         | The total number of races for the Stats                    |
| `total_wins`  | number         | The total number of races won for the Stats                |
| `points`      | number \| null | The points accumulated for the Stats                       |
| `avg_wpm`     | number \| null | The average words per minute for the Stats                 |
| `best_wpm`    | number \| null | The best words per minute for the Stats                    |
| `cert_wpm`    | number \| null | The certified words per minute for the Stats               |
| `dqd`         | boolean        | True if the Racer has been disqualified from this Universe |