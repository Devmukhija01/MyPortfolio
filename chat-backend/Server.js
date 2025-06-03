const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const OPENROUTER_API_KEY = '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 ';

app.post('/chat', async (req, res) => {
  try {
    const prompt = req.body.prompt;

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'gpt-4o-mini', // You can also use 'gpt-4o' or others
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const botResponse = response.data.choices[0].message.content;
    res.json({ response: botResponse });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to get response from OpenRouter API' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
