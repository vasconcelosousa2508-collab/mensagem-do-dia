const express = require('express');
const axios = require('axios');
const path = require('node:path');

const app = express();
const PORT = process.env.PORT || 3000;
const API_URL =
  process.env.API_URL ||
  'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (_req, res) => {
  try {
    const response = await axios.get(API_URL);
    const quote = Array.isArray(response.data)
      ? response.data[0]
      : response.data;

    if (typeof quote !== 'string' || !quote.trim()) {
      throw new Error('A API não retornou uma mensagem válida.');
    }

    res.render('index', { quote, error: null });
  } catch (error) {
    console.error('Erro ao consultar a API:', error.message);
    res.status(502).render('index', {
      quote: null,
      error: 'Não foi possível carregar a mensagem. Tente novamente mais tarde.',
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor disponível em http://localhost:${PORT}`);
});
