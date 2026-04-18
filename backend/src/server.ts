// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(helmet());
// app.use(cors({
//   origin: process.env.FRONTEND_URL || 'http://localhost:3000',
//   credentials: true,
// }));
// app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//   res.send('SaaS Task Manager API is running!');
// });

// // Health Check Route
// app.get('/api/health', (req: Request, res: Response) => {
//   res.status(200).json({ status: 'success', message: 'API is running smoothly.' });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });

import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/db';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Swagger Config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: { title: 'SaaS Task Manager API', version: '1.0.0' },
  },
  apis: ['./src/server.ts'], // Path to the API docs
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @openapi
 * /api/health:
 * get:
 * description: Returns the health status of the API
 * responses:
 * 200:
 * description: Success
 */
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'success', message: 'API is running smoothly.' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server: http://localhost:${PORT}`);
  console.log(`📄 Docs: http://localhost:${PORT}/api-docs`);
});