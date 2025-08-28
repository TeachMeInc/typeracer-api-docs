# Get Racer Historical Race Results

Get the historical RaceResults for the Racer with the given username and universe as a CSV file

NOTE: you must be subscribed to TypeRacer Ultimate to access this endpoint

## URL

`GET /v1/racers/<username>/historical/races`

## Parameters

| Parameter  | Type   | Description                                                                                                                                                                                            |
|------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `username` | string | The username of the Racer to get historical RaceResults for                                                                                                                                            |
| `universe` | string | The name of the universe to get historical RaceResults for                                                                                                                                             |
| `bucket`   | number | Historical RaceResults are archived in buckets of 1000. This parameter specifies which bucket to retrieve. `bucket: X` will retrieve races X000-X999 (i.e. `bucket: 1` will retrieve races 1000-1999). |

## Return Value

A CSV file containing the historical RaceResults for the given username and universe