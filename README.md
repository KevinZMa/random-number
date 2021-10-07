# random-number

Random API [deployed](https://rand-num.vercel.app/) on Vercel. (starter project to discover how Vercel works)

## API

### `GET https://rand-num.vercel.app/`

Returns a random number from `min` to `max` (inclusive).

#### Query Parameters

- `min`
  - **Type:** `number`
  - **Default:** `1`
- `max`
  - **Type:** `number`
  - **Default:** `1000`

#### Response

`200`

JSON response with this schema:

```json
{
  "status": 200,
  "number": 123
}
```

`500`

An internal error has occured.