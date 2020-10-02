import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList
} from 'graphql';

import logs from '../models/logs';

const LogType = new GraphQLObjectType({
  name: 'Log',
  fields: () => ({
    _id: { type: GraphQLID },
    streamer: { type: GraphQLString },
    viewers: { type: GraphQLList(GraphQLString) }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    books: {
      type: new GraphQLList(LogType),
      resolve() {
        return logs.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addLog: {
      type: LogType,
      args: {
        streamer: { type: GraphQLString },
        viewers: { type: GraphQLList(GraphQLString) }
      },
      resolve(parents, args) {
        return logs.create({ streamer: args.streamer, viewers: args.viewers });
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
