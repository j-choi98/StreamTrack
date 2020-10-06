import { prop, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class Log {
  @Field((type) => ID)
  readonly _id?: string;

  @Field()
  @prop({ required: true, index: true })
  public streamer!: string;

  @Field((type) => [String])
  @prop({ required: true, index: true, type: () => [String], default: [] })
  public viewers!: string[];

  @Field()
  @prop({ required: true, index: true })
  public viewerCount!: number;
}

export const LogModel = getModelForClass(Log);
