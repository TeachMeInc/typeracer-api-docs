# Get Competitions

Get the active Competitions for the given universe (and optional date)

## URL

`GET /v2/competitions`

## Parameters

| Parameter  | Type            | Description                                          |
|------------|-----------------|------------------------------------------------------|
| `universe` | string          | The universe to get Competitions for                 |
| `date`     | Date (optional) | The date to get Competitions for (defaults to today) |

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": Competition[] | null
}
```