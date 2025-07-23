# Get Racer Performance

Get the PartialRacerStats for the Racer with the given username in the given universe for the given time period

## URL

`GET /v1/racers/<username>/performance`

## Parameters

| Parameter  | Type                | Description                                                                             |
|------------|---------------------|-----------------------------------------------------------------------------------------|
| `username` | string              | The username of the Racer to get PartialRacerStats for                                  |
| `universe` | string              | The Universe to get PartialRacerStats for                                               |
| `kind`     | string              | The kind of PartialRacerStats to get (day, week, month, year)                           |
| `n`        | number (optional)   | The number of PartialRacerStats to return - must be between 1 and 100 (default: 10)     |
| `after`    | DateTime (optional) | If provided, will only return PartialRacerStats that ended after the provided DateTime  |
| `before`   | DateTime (optional) | If provided, will only return PartialRacerStats that ended before the provided DateTime |


## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": PartialRacerStats[] | null
}
```