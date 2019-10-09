import { Document } from 'mongoose';

export interface Link extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
