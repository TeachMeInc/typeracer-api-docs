# Get Text

Get the Text for the given text_id

### URL

`GET /v1/texts/<text_id>`

### Parameters

| Parameter | Type   | Description               |
|-----------|--------|---------------------------|
| `text_id` | number | The ID of the Text to get |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": Text | null
}
```