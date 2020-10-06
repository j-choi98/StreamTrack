import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Log, LogModel } from '../entities/Log';

@Resolver()
export class LogResolver {
  @Query(() => [Log])
  async logs(
    @Arg('streamer', { nullable: true }) streamer?: string,
    @Arg('viewer', { nullable: true }) viewer?: string
  ) {
    return await LogModel.find({
      ...(streamer && { streamer }),
      ...(viewer && { viewers: viewer })
    });
  }

  @Query(() => Log, { nullable: true })
  async log(
    @Arg('streamer', { nullable: true }) streamer?: string,
    @Arg('viewer', { nullable: true }) viewer?: string
  ) {
    return await LogModel.findOne({
      ...(streamer && { streamer }),
      ...(viewer && { viewers: viewer })
    });
  }

  @Mutation(() => Log)
  async addLog(
    @Arg('streamer') streamer: string,
    @Arg('viewers', (type) => [String]) viewers: string[]
  ) {
    return await LogModel.create({
      streamer,
      viewers,
      viewerCount: viewers.length
    });
  }

  @Query(() => Number)
  async getTotalStreamerCount() {
    return await LogModel.countDocuments();
  }

  @Query(() => Number)
  async getTotalViewerCount() {
    const sumResult = await LogModel.aggregate([
      {
        $group: {
          _id: null,
          total: {
            $sum: '$viewerCount'
          }
        }
      }
    ]);

    return sumResult[0].total;
  }
}
