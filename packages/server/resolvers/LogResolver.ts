import { Resolver, Query, Arg, Mutation, ID } from 'type-graphql';
import { Log, LogModel } from '../entities/Log';

@Resolver()
export class LogResolver {
  @Query(() => [Log])
  async logs() {
    return await LogModel.find();
  }

  @Mutation(() => Log)
  async addLogs(
    @Arg('streamer') streamer: string,
    @Arg('viewers', (type) => [String]) viewers: string[]
  ) {
    return await LogModel.create({ streamer, viewers });
  }
}
