# Get Racer Race Result

Get the RaceResult for the Race for the given username and race_number

### URL

`GET /v1/racers/<username>/races/<race_number>`

### Parameters

| Parameter     | Type               | Description                                                                   |
|---------------|--------------------|-------------------------------------------------------------------------------|
| `username`    | string             | The username of the Racer to get the RaceResult for                           |
| `race_number` | number             | The number of the Race to get the RaceResult for                              |
| `universe`    | string             | The name of the universe to get the RaceResult for                            |
| `keylog`      | boolean (optional) | If true, will return the keylog as part of the RaceResult - defaults to false |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult | null
}
```