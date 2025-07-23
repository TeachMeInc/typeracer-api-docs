# Authentication

The TypeRacer API uses [Basic Access Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).

### Generating an API Key

**Please note: The TypeRacer API is currently in a closed testing phase.** To generate an API Key, you must first be an **approved API tester**.

If you are an approved tester, you can navigate to the "Manage Your API Keys" page from the bottom of the "Edit Profile" page (or follow [this link](https://data.typeracer.com/pit/api_keys)).

From there, you can create and manage your API Keys.

### Authenticating with the API

Every request to the TypeRacer API requires an `Authorization` header in the following format:

`Authorization: Basic <credentials>`

Where `<credentials>` is the Base64 encoding of your username and API Key joined by a single colon (`:`).

**Example:** Assuming your username is `"typeracer"` and your API Key is `"foobar"`, your `Authorization` header should look like the following:

`"Basic" + base64.encode("typeracer:foobar")`

`Basic dHlwZXJhY2VyOmZvb2Jhcgo=`