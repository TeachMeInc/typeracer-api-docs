# Get Racer Award History

Get the CompetitionResults for the Racer with the given username

## URL

`GET /v1/racers/<username>/awards/history`

## Parameters

| Parameter  | Type              | Description                                                                                              |
|------------|-------------------|----------------------------------------------------------------------------------------------------------|
| `username` | string            | The username of the Racer to get CompetitionResults for                                                  |
| `kind`     | string (optional) | The kind of competition to filter the CompetitionResults for (day, week, month, year)                    |
| `n`        | number (optional) | The number of CompetitionResults to return - must be between 1 and 100 (default: 20)                     |
| `after`    | Date (optional)   | If provided, will only return CompetitionResults for competitions that finished after the provided Date  |
| `before`   | Date (optional)   | If provided, will only return CompetitionResults for competitions that finished before the provided Date |


## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": CompetitionResult[] | null
}
```