FROM postgres:latest

ENV POSTGRES_DB=bonsite_db
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password

COPY init.sql /docker-entrypoint-initdb.d/