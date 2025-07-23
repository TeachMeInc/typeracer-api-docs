# Get Top Race Results For Text

Get the top RaceResults for the given text_id

## URL

`GET /v1/texts/<text_id>/top`

## Parameters

| Parameter  | Type               | Description                                                                    |
|------------|--------------------|--------------------------------------------------------------------------------|
| `text_id`  | number             | The ID of the Text to get                                                      |
| `universe` | string (optional)  | The universe to get RaceResults for - will default to all universes if omitted |
| `distinct` | boolean (optional) | If true, will only return one RaceResult per Racer - defaults to false         |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": RaceResult[] | null
}
```