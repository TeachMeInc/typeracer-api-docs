# Get Racer Stats

Get the RacerStats for the Racer with the given username

### URL

`GET /v1/racers/<username>/stats`

### Parameters

| Parameter  | Type              | Description                                                                   |
|------------|-------------------|-------------------------------------------------------------------------------|
| `username` | string            | The username of the Racer to get RacerStats for                               |
| `universe` | string (optional) | The Universe to get RacerStats for - will default to all Universes if omitted |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RacerStats[] | null
}
```