import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({ required: true })
  name: string;
  @Prop()
  runtimeInMinutes: number;
  @Prop()
  budgetInMillions: number;
  @Prop()
  boxOfficeRevenueInMillions: number;
  @Prop()
  academyAwardNominations: number;
  @Prop()
  academyAwardWins: number;
  @Prop()
  rottenTomatoesScore: number;
}
export const MovieSchema = SchemaFactory.createForClass(Movie);