# Get Competition Results

Get the CompetitionResultV2s for a given Competition

## URL

`GET /v2/competitions/results`

## Parameters

| Parameter | Type   | Description                                   |
|-----------|--------|-----------------------------------------------|
| `uid`     | string | The uid of the Competition to get results for |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": CompetitionResultV2[] | null
}
```