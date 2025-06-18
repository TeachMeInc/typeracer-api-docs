# Get Race Results

Get the RaceResults for the Race for the given race_id

### URL

`GET /api/v1/races/<race_id>`

### Parameters

| Parameter | Type               | Description                                                                   |
|-----------|--------------------|-------------------------------------------------------------------------------|
| `race_id` | string             | The ID of the race to get RaceResults for                                     |
| `keylog`  | boolean (optional) | If true, will return the keylog as part of the RaceResult - defaults to false |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult[] | null
}
```