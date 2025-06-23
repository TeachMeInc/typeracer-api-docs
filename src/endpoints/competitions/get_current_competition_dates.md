# Get Current Competition Dates

Get the start and end date and times of the currently active competitions

### URL

`GET /v1/competitions`

### Parameters

None

### Return Value

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