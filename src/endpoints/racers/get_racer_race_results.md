# Get Racer Race Results

Get the RaceResults for the Racer with the given username

NOTE: this endpoint will only return RaceResults from the last year

## URL

`GET /v1/racers/<username>/races`

## Parameters

| Parameter  | Type                | Description                                                                          |
|------------|---------------------|--------------------------------------------------------------------------------------|
| `username` | string              | The username of the Racer to get RaceResults for                                     |
| `universe` | string              | The name of the universe to get RaceResults for                                      |
| `text_id`  | number (optional)   | The id of the Text to get RaceResults for                                            |
| `n`        | number (optional)   | The number of RaceResults to return - must be between 1 and 1000 (default: 10)       |
| `after`    | DateTime (optional) | If provided, will only return RaceResults that occurred after the provided DateTime  |
| `before`   | DateTime (optional) | If provided, will only return RaceResults that occurred before the provided DateTime |
| `keylog`   | boolean (optional)  | If true, will return the keylog as part of the RaceResult - defaults to false        |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult[] | null
}
```