import express from 'express';
import dotenv from 'dotenv';
import mailRoutes from './routes/mailRoutes.js';

const app = express();

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => {
	res.status(201).json({ sucess: true, message: 'Send Mailer Using Nodemailer' });
});

app.use('/api', mailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on ${PORT} port`));
