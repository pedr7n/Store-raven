## RavenDB + Java Example
A Store made with Spring boot, javascript and RavenDB!

## Tech Stack

Java 17

Spring Boot

RavenDB 6.x

Docker

## How to run

1. Run RavenDB via Docker
   docker run -d \
  --name ravendb \
  -p 8080:8080 -p 38888:38888 \
  ravendb/ravendb:6.0-ubuntu-latest
2. Access Raven Studio
  URL: http://localhost:8080
  Default DataBase: demo
3. Set up your application.yaml
   spring:
  ravendb:
    url: http://localhost:8080
    database: demo
4. Run the application
   mvn spring-boot:run

## Example Endpoints

| Method   | Endpoint      | Description       |
| -------- | ------------- | ----------------- |
| `GET`    | `/products`      | List all products    |
| `GET`    | `/products/{id}` | List a product by id |
| `POST`   | `/products`      | Create a new product |
| `PUT`    | `/products/{id}` | Update a product     |
| `DELETE` | `/products/{id}` | Delete a product     |

## Why RavenDB?

Fully transactional (ACID) — rare for NoSQL databases.

Embedded full-text search — no need for Elasticsearch or Lucene integration.

Self-indexing — indexes are auto-created and optimized by the server.

Clustering and replication built-in — without external setup.

Excellent for microservices — lightweight and schema-less.

## Useful Links

https://ravendb.net
https://ravendb.net/docs/article-page/6.0/java
https://hub.docker.com/r/ravendb/ravendb
