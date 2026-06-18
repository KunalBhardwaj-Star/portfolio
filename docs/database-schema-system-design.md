### Database Schemas

## Profile
```text
id UUID PRIMARY KEY
name VARCHAR(255)
email VARCHAR(255)

about TEXT

github_url TEXT
linkedin_url TEXT
leetcode_url TEXT
resume_url TEXT

profile_image_url TEXT

created_at TIMESTAMP
updated_at TIMESTAMP
```

## Project
```text
id UUID PRIMARY KEY
title VARCHAR(255)
description TEXT

github_url TEXT
live_url TEXT
image_url TEXT

tech_stack TEXT[]
featured TEXT

created_at TIMESTAMP
updated_at TIMESTAMP
```

## Skills
```text
id UUID PRIMARY KEY
name VARCHAR(255)

category VARCHAR(255)
proficiency_level VARCHAR(255)

created_at TIMESTAMP
```

## Certificates
```text
id UUID PRIMARY KEY
title VARCHAR(255)
issuer VARCHAR(255)
issue_date DATE
certificate_url TEXT
created_at TIMESTAMP
```

## Visitors
```text
id UUID PRIMARY KEY
visited_at TIMESTAMP
```

## ContactMessage
```text
id UUID PRIMARY KEY
name VARCHAR(255)
email VARCHAR(255)
message TEXT
created_at TIMESTAMP
```

## Review
```text
id UUID PRIMARY KEY
name VARCHAR(255)
email VARCHAR(255)
review_text TEXT
sentiment TEXT
summary TEXT
rating INT
reviewed_at TIMESTAMP
``` 