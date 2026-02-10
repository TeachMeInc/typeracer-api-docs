# Get Competition Results

Get the RacerStats for a given competition date and period

::: danger Deprecated
This endpoint is deprecated. Please use the [v2 version](/endpoints/competitions_v2/get_competition_results) instead.
:::

## URL

`GET /v1/competitions/results`

## Parameters

| Parameter | Type   | Description                                                         |
|-----------|--------|---------------------------------------------------------------------|
| `kind`    | string | The kind of competition to get results for (day, week, month, year) |
| `date`    | Date   | The date of the competition to get results for                      |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": CompetitionResultV1[] | null
}
```