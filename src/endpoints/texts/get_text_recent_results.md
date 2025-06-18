# Get Recent Race Results For Text

Get the recent RaceResults for the given text_id

### URL

`GET /api/v1/text/<text_id>/recent`

### Parameters

| Parameter  | Type              | Description                                                                    |
|------------|-------------------|--------------------------------------------------------------------------------|
| `text_id`  | number            | The ID of the Text to get                                                      |
| `universe` | string (optional) | The Universe to get RaceResults for - will default to all Universes if omitted |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult[] | null
}
```