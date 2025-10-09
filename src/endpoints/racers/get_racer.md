# Get Racer

Get the Racer for the given username

## URL

`GET /v1/racers/<username>`

## Parameters

| Parameter  | Type              | Description                                                              |
|------------|-------------------|--------------------------------------------------------------------------|
| `username` | string            | The username of the Racer to get                                         |
| `universe` | string (optional) | The Universe to get RacerStats for - will default to `"play"` if omitted |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": Racer | null
}
```