# Get Racer Badges

Get the Badges for the Racer with the given username

## URL

`GET /v1/racers/<username>/badges`

## Parameters

| Parameter  | Type    | Description                                 |
|------------|---------|---------------------------------------------|
| `username` | string  | The username of the Racer to get Badges for |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": Badge[] | null
}
```