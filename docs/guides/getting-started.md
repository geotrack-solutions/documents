# Getting started

1. Get your API key from the dashboard.
2. Make a test request:
```bash
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.example.com/v1/ping
```

<!-- tabs:start -->

#### **Java**
```java
// OkHttp example
Request request = new Request.Builder()
    .url("https://api.example.com/v1/ping")
    .addHeader("Authorization", "Bearer YOUR_API_KEY")
    .build();
```

#### **Python**
```python
import requests
requests.get("https://api.example.com/v1/ping",
             headers={"Authorization": "Bearer YOUR_API_KEY"})
```

<!-- tabs:end -->
