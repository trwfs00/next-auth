## Getting Started
Create a set up in nextjs with next-auth. In this article we create a demo project with next-auth library
.
### Require `.env` variable for run demo in locally
run the demo in locally or server you need three `.env` variable.

Read more about secert
https://next-auth.js.org/warnings#no_secret
How to Genrate the secret using openssl command copy and paste >  
` openssl rand -base64 32 `

secret= v7CO-My-Secret-BVZ2kwusMNs=

GITHUB_ID = Iv1-My-Github-Id-f1b
GITHUB_SECRET= a220c-My-Github-Secret-fb9fee6968

First, Adding enviment varable in project then start the development server:

```bash
npm run dev
# or
yarn dev
```