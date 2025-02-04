#  Developer Guide: API Example

In this documentation, we will explore a web application developed with Next.js, a powerful React framework, combined with Tailwind CSS for styling and Mongoose for database management. The purpose of this project is to learn and practice modern web development techniques, especifically focusing on building an API and their endpoints.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [How to setup as development](#setup-as-development)
3. [How to use and test](#use-and-test)

## Technologies Used

- **[Next.js](https://nextjs.org/):** A React framework for building fast, server-side rendered web applications.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for designing responsive and modern interfaces.
- **[Mongoose](https://mongoosejs.com/)**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution to model application data and interact with the database.

## Setup as development

### Prerequisites

Before you begin, ensure that you have the following installed:

- Node.js
- NPM

### Installation

**1. Install the dependencies:** 

Running the following command in your terminal:

```bash
npm install
```

**2. Set Environment Variables:**

Create a '.env' file in the root directory and configure the following variables:

```bash
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=q9D$1u4v&8ZpXk3@L7w%RmNj5YtH2!A
```

Personaly, i'm using Atlas for the database, but you can use any database of your choice.

[MongoDB Atlas](https://www.mongodb.com/atlas/database)

**3. Run the development server:**

```bash
npm run dev
```

## Use and test

This is a project to practice a creation of an API, with some endpoints, his methods and authentication token use as example.

### Postman

Personally, i'm using Postman for the testing, but you can use any tool of your choice.

OBS: You can find the 'next-api.postman_collection.json' file along with the project. It's a Postman collection file, which contains all the endpoints and methods used in the project.

[Postman](https://www.postman.com/)

### Home page

The project home page(http://localhost:3000/) also contains the endpoints and methods of the API with the headers and body of each request.

### Auth token

To use the endpoints, you need to have an authentication token:

1. Create a user with POST request to `api/users`.

2. Send a POST request to `/api/auth/login`.

3. Get the token from the response.

4. Test the endpoints.