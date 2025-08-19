# Keylogs

The TypeRacer API exposes keylogs for races in the `RaceResult` entity, representing the keys that were pressed during a race and the timestamps of when they were pressed.

## Overview

The TypeRacer keylog is split into multiple parts, using the following format:

`{version},{language},{text length},{key presses}|{edits}`

Let's break these parts down one by one.

### Version

The version of the keylog format. The current value is `TLv1` (for TypeRacer Log Version 1)

### Language

The language of the text being typed. This is the two-letter ISO 639-1 language code. For example, `en` for English, `es` for Spanish, etc.

### Text Length

The length of the text being typed. This is the number of characters in the text, with one special exception: 3 and 4 byte characters (such as emojis) count as two characters when calculating the text length.

### Key Presses

A compacted string that alternates between the character that was successfully pressed and the number of milliseconds since the previous successful keypress (or since the beginning of the race for the first character).

The key presses string only contains characters that were successfully pressed. Characters that were typed but not part of the text (such as typos) are not included in the key presses string (but are included in the edits section below).

For example, the string `H10e10l10l10o10` represents the text `Hello` with each character being pressed 10 milliseconds after the previous character.

NOTE: If the character pressed is a number (`0`-`9`) or a dash (`-`) it will be preceded by a backspace character (`\b`) to separate it from the previous timestamp. 

For example, the string `t10e10s10t10\b110\b210\b310` represents the text `test123` with each character being pressed 10 milliseconds after the previous character.

### Edits

A comma-separated string representing each individual edit made during the race. Edits are grouped by word, using the following format:

`{text index},{number of edits},{...individual edits}`

with "individual edits" broken down further into the following format:

`{timestamp},{word index}{edit type}{character}`

The two values for "edit type" are `+` for an addition and `-` for a deletion.

For example, the string `0,6,10,0+T,20,1+r,15,1-r,10,1+h,30,2+e,40,3+ ,` represents the following:

- The word starts at index `0` (i.e. it is the first word in the text)
- there were `6` edits made typing the word
  - after 10 ms, the character `T` was added at index `0` in the word
  - after 20 ms, the character `r` was added at index `1` in the word
  - after 15 ms, the character `r` was removed from index `1` in the word
  - after 10 ms, the character `h` was added at index `1` in the word
  - after 30 ms, the character `e` was added at index `2` in the word
  - after 40 ms, the character ` ` (space) was added at index `3` in the word

NOTE: because the values in the edits string are comma-separated we do not need a special backspace character to separate numbers from the previous timestamp.
