<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<a href="https://github.com/google/gts"><img src="https://img.shields.io/badge/code%20style-google-blueviolet.svg" alt="Code Style Google">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>

</p>

## Description

Backend for the RUBO Repair-Cafe Ticketing System

## Installation

```bash
$ npm install
```

## Running the app

This project requires a Postgres SQL Database to be available.  
Create a ``.env`` file in the root directory of this project. (Next to gitignore, readme etc...)  
And set these properties:  
- ``DATABASE_HOST`` (IP or URL to DB)
- ``DATABASE_PORT`` (Port used by DB-Server)
- ``DATABASE_USER`` (Username to access DB-Server)
- ``DATABASE_PASSWORD`` (Password for the user)
- ``DATABASE_NAME`` (Optional property to set the used Database name. Defaults to ``repaircafe``)

It also makes use of JWT for user authentication. To sign JWTs a secret is required.  
Set ``JWT_SECRET`` in the .env as well. Keep in mind that this is a **secret** so make sure that it is protected and secure.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support
This project uses Nest, wich is an awesome Backend-Framework.
Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

  Nest and this Backend is [MIT licensed](LICENSE).
