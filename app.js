const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Kanal-Kart</h1>
    <ul>
      <li>Product 1: Phone</li>
      <li>Product 2: Laptop</li>
      <li>Product 3: Shoes</li>
      <li>Prodcut 4: Watches</li>
      <li>Prodcut 5: Bags.</li>
      <li>Prodcut 5: Bags testing  branch.</li>
      </ul>
  `);
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));

