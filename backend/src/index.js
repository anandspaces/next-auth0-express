import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';
import { sendEmail } from './utils/email.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/auth/callback', async (req, res) => {
  const { token, email } = req.body;

  try {
    const response = await fetch(`https://${process.env.AUTH0_DOMAIN}/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    await sendEmail(email, token);
    res.status(200).json({ message: 'Email sent!' });

  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
