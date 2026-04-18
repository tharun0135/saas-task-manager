import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('SaaS Task Manager API is running!');
});

// Health Check Route
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'API is running smoothly.' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});