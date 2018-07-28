const express = require('express'); // common JS module used by node ("require" instead of "import")
const app = express();  // express application

app.get('/', (req, res) => { // route handler
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// localhost:5000
