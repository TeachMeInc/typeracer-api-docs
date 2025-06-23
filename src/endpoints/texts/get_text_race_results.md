# Get Race Results For Text

Get the RaceResults for the Text with the given text_id

### URL

`GET /v1/texts/<text_id>/races`

### Parameters

| Parameter  | Type                | Description                                                                          |
|------------|---------------------|--------------------------------------------------------------------------------------|
| `text_id`  | number              | The ID of the Text to get                                                            |
| `universe` | string (optional)   | The Universe to get RaceResults for - will default to all Universes if omitted       |
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