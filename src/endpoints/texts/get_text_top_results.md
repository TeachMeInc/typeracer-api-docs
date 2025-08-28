# Get Top Race Results For Text

Get the all-time top RaceResults for the given text_id from the play universe

## URL

`GET /v1/texts/<text_id>/top`

## Parameters

| Parameter  | Type               | Description                                                                    |
|------------|--------------------|--------------------------------------------------------------------------------|
| `text_id`  | number             | The ID of the Text to get                                                      |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult[] | null
}
```