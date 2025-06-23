# RaceResult

An entity representing the results of a Race by a Racer

## Fields

| Field  | Type           | Description                                       |
|--------|----------------|---------------------------------------------------|
| `user` | string         | The username of the Racer the RaceResult is for   |
| `univ` | string         | The name of the Universe the RaceResult is for    |
| `rid`  | string         | The ID of the Race the RaceResult is for          |
| `tid`  | number         | The ID of the Text the RaceResult is for          |
| `sl`   | string         | The skill level of the Text the RaceResult is for |
| `t`    | DateTime       | The timestamp of the Race the RaceResult is for   |
| `acc`  | number         | The accuracy of the RaceResult                    |
| `wpm`  | number \| null | The words per minute of the RaceResult            |
| `pts`  | number \| null | The points awarded for the RaceResult             |
| `rn`   | number         | The Race number for the Racer                     |
| `nr`   | number         | The number of Racers in the Race                  |
| `r`    | number         | The rank of the Racer in the Race                 |
| `kl`   | string \| null | The keylog of the RaceResult                      |