import { model, Schema } from 'mongoose';
import { v4 } from 'uuid';

//the _Name interface
export interface I_Name {
  _id: string;
}

//the schema of the _Name
const _NameSchema = new Schema<I_Name>({
  _id: {
    type: String,
    required: true,
    default: v4,
  },
});

//the exported model of the _NameSchema
export const _NameModel = model<I_Name>('_Name', _NameSchema);
