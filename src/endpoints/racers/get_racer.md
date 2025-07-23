# Get Racer

Get the Racer for the given username

## URL

`GET /v1/racers/<username>`

## Parameters

| Parameter  | Type   | Description                      |
|------------|--------|----------------------------------|
| `username` | string | The username of the Racer to get |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": Racer | null
}
```