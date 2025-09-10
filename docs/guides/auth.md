# Authentication

All requests require a valid API key.

- Pass the header: `Authorization: Bearer <API_KEY>`
- API keys can be rotated in the dashboard.
- Keys are scoped; prefer least-privilege.

### Error codes
| Code | Meaning                |
|-----:|------------------------|
| 401  | Missing/invalid token  |
| 403  | Not allowed (scope)    |
