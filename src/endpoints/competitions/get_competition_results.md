# Get Competition Results

Get the RacerStats for a given competition date and period

### URL

`GET /api/v1/competitions`

### Parameters

| Parameter | Type   | Description                                                         |
|-----------|--------|---------------------------------------------------------------------|
| `kind`    | string | The kind of competition to get results for (day, week, month, year) |
| `date`    | Date   | The date of the competition                                         |

### Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": {
    "start": DateTime,
    "end": DateTime,
    "results": RacerStats[]
  } | null
}
```