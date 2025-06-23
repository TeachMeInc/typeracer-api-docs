# Get Racer Award Counts

Get the competition award counts for the Racer with the given username

### URL

`GET /v1/racers/<username>/awards`

### Parameters

| Parameter  | Type              | Description                                                               |
|------------|-------------------|---------------------------------------------------------------------------|
| `username` | string            | The username of the Racer to get                                          |
| `kind`     | string (optional) | The kind of competition to filter the counts for (day, week, month, year) |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": {
    "1": number,
    "2": number,
    "3": number
  } | null
}
```