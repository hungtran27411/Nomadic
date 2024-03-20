import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';

const app = express();
app.use(bodyParser.json({ limit: '32mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '32mb', extended: true }));
app.use(cors());
app.use('/stories', storyRoutes);
app.get('/', (req, res) => {
  res.send('welcome to the Nomadic api');
});

const MONGO_URI =
  'mongodb+srv://hungtrannn:T1xl2jk4bv@cluster0.78rnzpv.mongodb.net/nomadic?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (err) {
    console.error('Connection to MongoDB failed', err.message);
  }
};
connectDB();
mongoose.connection.on('open', () =>
  console.log('Connection to database has been established succesfully')
);
mongoose.connection.on('error', (err) => console.log('you made it here', err));
