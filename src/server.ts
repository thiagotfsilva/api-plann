import { buildApp } from "app";


if (require.main === module) {
  const port = 3000;
  buildApp().listen({ port, host: '0.0.0.0' }, () =>
    console.log(`App is running on port ${port}`)
  );
}
