# Get Latest Race Results

Get the latest RaceResults sorted by timestamp

## URL

`GET /v1/races`

## Parameters

| Parameter | Type               | Description                                                                   |
|-----------|--------------------|-------------------------------------------------------------------------------|
| `n`       | number (optional)  | The number of RaceResults to return - must be between 1 and 100 (default: 10) |
| `keylog`  | boolean (optional) | If true, will return the keylog as part of the RaceResult - defaults to false |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult[] | null
}
```