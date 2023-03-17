# Graph API using Hasura
## About Application
A graphql api using hasura with nodejs, including:

* Restful APIs using node.js/express
* Postgres database
* Jwt authentication with simple text secrets
* Run project using Docker etc.

## For docker installation

```bash
$ sudo addgroup --system docker

$ sudo adduser $USER docker

$ newgrp docker

$ sudo snap install docker

To install Docker Compose-V2
$ sudo apt install jq

$ DOCKER_COMPOSE_VERSION=$(curl --silent https://api.github.com/repos/docker/compose/releases/latest | jq .name -r)

$ echo $DOCKER_COMPOSE_VERSION

$ sudo curl -L "https://github.com/docker/compose/releases/download/$DOCKER_COMPOSE_VERSION/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

$ sudo chmod +x /usr/local/bin/docker-compose
```

## Running the app through docker

```bash
# Run project
$ docker compose up

# Stop project
$ docker compose down

```

## Running the app normally

```bash
# development
$ npm start

```

## Support

It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Shivang Pandit](https://www.linkedin.com/in/shivang-pandit)

## License

[Hasura](https://hasura.io/learn/graphql/backend-stack/languages/node/). is [MIT licensed](LICENSE).
