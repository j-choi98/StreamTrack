import { prop, getModelForClass } from '@typegoose/typegoose';
import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class Log {
  @Field((type) => ID)
  readonly _id?: string;

  @Field()
  @prop({ required: true })
  public streamer!: string;

  @Field((type) => [String])
  @prop({ required: true, type: () => [String], default: [] })
  public viewers!: string[];
}

export const LogModel = getModelForClass(Log);
