# Auth0 Next.js SDK Sample Application

This sample demonstrates the integration of [Auth0 Next.js SDK](https://github.com/auth0/nextjs-auth0) into a Next.js application created using [create-next-app](https://nextjs.org/docs/api-reference/create-next-app). The sample is a companion to the [Auth0 Next.js SDK Quickstart](https://auth0.com/docs/quickstart/webapp/nextjs).

This sample demonstrates the following use cases:

- [Login](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/components/NavBar.jsx#L61-L67)
- [Logout](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/components/NavBar.jsx#L93-L95)
- [Showing the user profile](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/pages/profile.jsx)
- [Protecting client-side rendered pages](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/pages/profile.jsx#L43-L46)
- [Calling APIs](https://github.com/auth0-samples/auth0-nextjs-samples/blob/main/Sample-01/pages/external.jsx)

## Getting Started

### Prerequisites
- Node.js v18+ (recommended: use nvm or fnm to match project version)
- npm v9+ or yarn

### 1. Clone the repo
```sh
git clone https://github.com/Den-web/auth0-next-sample.git
cd auth0-next-sample
```

### 2. Install dependencies
```sh
npm install
# or
yarn install
```

### 3. Set up environment variables
Copy `.env.example` to `.env.local` and fill in the required values:
```sh
cp .env.example .env.local
```
Edit `.env.local` and set your Auth0 credentials and any other required secrets.

### 4. Build and run
#### Development
```sh
npm run dev
# or
yarn dev
```

#### Production
```sh
npm run build
npm start
# or
yarn build
yarn start
```

### 5. Node version
This project is tested with Node.js v18.x. Use nvm or fnm to match:
```sh
nvm install 18
nvm use 18
```

### 6. Auth0 Setup
- You need to create an Auth0 application and set the callback/logout URLs to match your deployment.
- Required env variables (see `.env.example`):
  - AUTH0_DOMAIN
  - AUTH0_CLIENT_ID
  - AUTH0_CLIENT_SECRET
  - AUTH0_SCOPE
  - AUTH0_REDIRECT_URI
  - AUTH0_POST_LOGOUT_REDIRECT_URI

---

For more, see [Next.js docs](https://nextjs.org/) and [Auth0 Next.js SDK docs](https://auth0.com/docs/quickstart/webapp/nextjs).

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```

## Configuration

### Create an API

For the **External API** page to work, you will need to [create an API](https://auth0.com/docs/authorization/apis) using the [management dashboard](https://manage.auth0.com/#/apis). This will give you an API Identifier that you can use in the `AUTH0_AUDIENCE` environment variable below. Then you will need to [add a permission](https://auth0.com/docs/get-started/dashboard/add-api-permissions) named `read:shows` to your API. To get your app to ask for that permission, include it in the value of the `AUTH0_SCOPE` environment variable.

If you do not wish to use an API or observe the API call working, you should not specify the `AUTH0_AUDIENCE` and `AUTH0_SCOPE` values in the next steps.

### Configure credentials

The project needs to be configured with your Auth0 Domain, Client ID and Client Secret for the authentication flow to work.

To do this, first copy `.env.local.example` into a new file in the same folder called `.env.local`, and replace the values with your own Auth0 application credentials (see more info about [loading environmental variables in Next.js](https://nextjs.org/docs/basic-features/environment-variables)):

```sh
# A long secret value used to encrypt the session cookie
AUTH0_SECRET='LONG_RANDOM_VALUE'
# The base url of your application
APP_BASE_URL='http://localhost:3000'
# Your Auth0 tenant domain
AUTH0_DOMAIN='YOUR_AUTH0_DOMAIN.auth0.com'
# Your Auth0 application's Client ID
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
# Your Auth0 application's Client Secret
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'
# Your Auth0 API's Identifier 
# OMIT if you do not want to use the API part of the sample
AUTH0_AUDIENCE='YOUR_AUTH0_API_IDENTIFIER'
# The permissions your app is asking for
# OMIT if you do not want to use the API part of the sample
AUTH0_SCOPE='openid profile email read:shows'
```

**Note**: Make sure you replace `AUTH0_SECRET` with your own secret (you can generate a suitable string using `openssl rand -hex 32` on the command line).

## Run the sample

### Compile and hot-reload for development

This compiles and serves the Next.js app and starts the API server on port 3001.

```bash
npm run dev
```

## Deployment

### Compiles and minifies for production

```bash
npm run build
```

### Docker build

To build and run the Docker image, run `exec.sh`, or `exec.ps1` on Windows.

### Run the unit tests

```bash
npm run test
```

### Run the integration tests

```bash
npm run test:integration
```

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple sources](https://auth0.com/docs/identityproviders), either social identity providers such as **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce** (amongst others), or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS, or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://auth0.com/docs/connections/database/custom-db)**.
* Add support for **[linking different user accounts](https://auth0.com/docs/users/user-account-linking)** with the same user.
* Support for generating signed [JSON Web Tokens](https://auth0.com/docs/tokens/json-web-tokens) to call your APIs and **flow the user identity** securely.
* Analytics of how, when, and where users are logging in.
* Pull data from other sources and add it to the user profile through [JavaScript rules](https://auth0.com/docs/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click **Sign Up**.
2. Use Google, GitHub, or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/responsible-disclosure-policy) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](./LICENSE) file for more info.
