## Project Motivation

Document systems are easy until:

* Multiple users edit at the same time
* Reads outnumber writes 100:1
* Real-time updates are expected
* You need to scale without breaking consistency

This project explores **how to handle those problems incrementally**, starting with WebSockets + Redis, and evolving toward Kafka-based event streaming.

---

##  Current Architecture (Phase 1)

* **FastAPI** for async REST + WebSocket APIs
* **WebSockets** for real-time collaboration
* **Redis** for caching, pub/sub, and distributed locks
* **PostgreSQL** for persistent storage
* **Docker & Docker Compose** for containerized services
* **AWS (selected services)** for deployment & infrastructure

##  Core Features (Implemented)

* ✅ Async REST APIs with FastAPI
* ✅ WebSocket-based real-time document updates
* ✅ JWT-based authentication
* ✅ Redis caching (read-heavy optimization)
* ✅ Redis Pub/Sub for WebSocket fan-out
* ✅ Distributed locking for concurrent edits
* ✅ Rate limiting for write operations
* ✅ Dockerized services for local & cloud deployment

---

##  Real-Time Collaboration Flow

1. Client connects via **WebSocket**
2. Document edits are validated and locked using **Redis**
3. Updates are persisted to **PostgreSQL**
4. Changes are broadcast using **Redis Pub/Sub**
5. Connected clients receive updates in real time


---


##  AWS Usage (Current)

* **EC2 / ECS** — containerized service deployment
* **RDS (PostgreSQL)** — managed relational database
* **ElastiCache (Redis)** — caching & pub/sub
* **S3 (optional)** — document attachments / assets

> Infrastructure choices are modular and can be extended or discarded without major refactoring.

---

##  Planned Architecture Evolution (Phase 2)

Kafka is planned for:

* Activity logging
* Notifications
* Audit trails
* Analytics
* Decoupling side-effects from request flow

```text
WebSockets + Redis  →  Kafka (event backbone)
```



##  Tech Stack

| Category      | Technology |
| ------------- | ---------- |
| Backend       | FastAPI    |
| Real-Time     | WebSockets |
| Database      | PostgreSQL |
| Cache / Locks | Redis      |
| Containers    | Docker     |
| Cloud         | AWS        |

---

## Running Locally

```bash
fastapi dev main.py
```



