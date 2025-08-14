import { buildApp } from "app";

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;
const host = process.env.HOST || '0.0.0.0';
buildApp().listen({ port, host }, () =>
  console.log(`App is running on port ${port}`)
);
