import { Schema, model, models } from 'mongoose';

const testSchema = new Schema({
  name: String,
  explanation: {
    type: String,
    required: true,
    unique: true,
  },
  date: String
});

const Test = models.Posts || model('Posts', testSchema);

export default Test;
