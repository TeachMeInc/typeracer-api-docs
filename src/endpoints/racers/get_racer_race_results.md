# Get Racer Race Results

Get the RaceResults for the Racer with the given username

### URL

`GET /api/v1/racers/<username>/races`

### Parameters

| Parameter  | Type                | Description                                                                          |
|------------|---------------------|--------------------------------------------------------------------------------------|
| `username` | string              | The username of the Racer to get RaceResults for                                     |
| `universe` | string              | The name of the universe to get RaceResults for                                      |
| `text_id`  | number (optional)   | The id of the Text to get RaceResults for                                            |
| `n`        | number (optional)   | The number of RaceResults to return - must be between 1 and 100 (default: 10)        |
| `after`    | DateTime (optional) | If provided, will only return RaceResults that occurred after the provided DateTime  |
| `before`   | DateTime (optional) | If provided, will only return RaceResults that occurred before the provided DateTime |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult[] | null
}
```