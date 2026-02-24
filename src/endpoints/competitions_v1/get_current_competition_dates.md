# Get Current Competition Dates :warning:

Get the start and end date and times of the currently active competitions

::: danger Deprecated
This endpoint is deprecated. Please use the [v2 version](/endpoints/competitions_v2/get_competitions) instead.
:::

## URL

`GET /v1/competitions`

## Parameters

None

## Return Value

```json
{
  "success": boolean,
  "error": Error | null,
  "data": {
    "day": { "start": DateTime, "end": DateTime },
    "week": { "start": DateTime, "end": DateTime },
    "month": { "start": DateTime, "end": DateTime },
    "year": { "start": DateTime, "end": DateTime },
  } | null
}
```