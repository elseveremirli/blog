import { Schema, model, models } from 'mongoose';

const nameSchema = new Schema({
  name: {String,unique:true}
});

const name = models.name || model('name', nameSchema);

export default name;
