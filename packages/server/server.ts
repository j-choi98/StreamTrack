import * as dotenv from 'dotenv';
dotenv.config();

import 'reflect-metadata';

import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

const app = express();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const schema = await buildSchema({
      resolvers: [__dirname + '/resolvers/**/*.{ts,js}'],
      emitSchemaFile: path.resolve(__dirname, 'schema.gql')
    });

    const server = new ApolloServer({ schema });
    server.applyMiddleware({ app, path: '/api/graphql' });

    app.listen(process.env.PORT || 3000, () => {
      console.log('Listening on port 3000.');
    });
  } catch (err) {
    console.log(err);
  }
})();
