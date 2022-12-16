# Rocketseat Notifications Service

This is a project from [Rocketseat](https://rocketseat.com.br) that uses Typescript, Nest, Prisma, and Jest to create a notification service. It is designed to generate, store, and serve notifications to users.

The project includes an API that allows users to create and manage notifications. It also includes a web interface to manage notifications.

The project is written in Typescript, a superset of JavaScript. This allows for type safety, better readability and easier maintenance.

Nest is used as the web framework to create the server, routes and controllers. Nest also provides an easy way to organize code and create APIs.

Prisma is used to store and manage notifications. Prisma is a powerful ORM that provides a rich query language and easy scalability.

Jest is used to test the code. Jest allows for easy testing of the code and ensures that the code is reliable and bug-free.

## Getting Started

To get started with this project, you will need to install the following:

- Node.js
- Typescript
- Nest
- Prisma
- Jest

Once you have these installed, you will need to clone this repository and install the necessary dependencies.

```bash
git clone https://github.com/jeny3g/rocketseat-notifications-service.git
cd rocketseat-notifications-service
npm install
```

Next, create a `.env` file and add the necessary environment variables.

Then, create the necessary database tables.

```bash
prisma migrate up --experimental
```

Finally, you can start the server.

```bash
npm start
```

You should now be able to access the web interface and API to manage notifications.

## Contributing

If you would like to contribute to this project, please feel free to send a pull request or open an issue.

## License

This project is licensed under the MIT License.
