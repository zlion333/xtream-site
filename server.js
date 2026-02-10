const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api', async (req, res) => {
  const { server, user, pass, action } = req.query;

  const url = `${server}/player_api.php?username=${user}&password=${pass}&action=${action}`;

  const r = await fetch(url);
  const data = await r.text();

  res.send(data);
});

app.use(express.static('public'));

app.listen(process.env.PORT || 3000);
