import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,autoIndex: true});
import requireAll from 'require-all'
requireAll(__dirname + '/../model');

mongoose
  .connection
  .on('error', console.error.bind(console, 'connection error:'))
  .once('open', () => console.log('db connected'));

