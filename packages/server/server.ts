import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import express from 'express';
import schema from './graphql/schema';
import { graphqlHTTP } from 'express-graphql';

(async () => {
  await mongoose.connect(process.env.MONGO_URI!);
})();

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000.');
});
