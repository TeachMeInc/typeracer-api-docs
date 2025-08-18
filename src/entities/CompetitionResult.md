# CompetitionResult

An entity representing the results of a Racer for a given competition on a given date

## Fields

| Field      | Type   | Description                                                        |
|------------|--------|--------------------------------------------------------------------|
| `username` | string | The username of the Racer the CompetitionResult is for             |
| `universe` | string | The name of the Universe the CompetitionResult is for              |
| `kind`     | string | The kind of competition the result is for (day, week, month, year) |
| `date`     | Date   | The date of the competition the result is for                      |
| `rank`     | number | The rank of the Racer in the competition                           |
| `points`   | number | The points the Racer accumulated in the competition                |
