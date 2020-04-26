import { Document } from 'mongoose';

export interface Token extends Document {
  readonly _id: string;
  readonly token: string;
  readonly type: string;
  readonly revoked: boolean;
  readonly user: string;
}
