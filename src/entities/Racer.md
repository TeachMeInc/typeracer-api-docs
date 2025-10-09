# Racer

An entity representing a Racer in TypeRacer

## Fields

| Field          | Type           | Description                                                       |
|----------------|----------------|-------------------------------------------------------------------|
| `username`     | string         | The Racer's username                                              |
| `name`         | string         | The Racer's name                                                  |
| `country`      | string         | The Racer's country code                                          |
| `avatar`       | string         | The Racer's chosen avatar                                         |
| `about`        | string \| null | The Racer's "about me"                                            |
| `keyboard`     | string         | The Racer's selected keyboard layout                              |
| `joined_at`    | DateTime       | The timestamp of when the Racer joined                            |
| `premium`      | boolean        | True if the Racer has a premium subscription                      |
| `premium_tier` | string \| null | The premium tier the Racer is subscribed to                       |
| `stats`        | RacerStats     | The Racer's stats for the given `universe` (defaults to `"play"`) |