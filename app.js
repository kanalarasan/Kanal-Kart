const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Kanal-Kart</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f7fa;
            margin: 0;
            padding: 40px 20px;
            color: #333;
          }
          h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            font-weight: 700;
            letter-spacing: 1.2px;
          }
          ul {
            max-width: 400px;
            margin: 0 auto;
            padding: 0;
            list-style: none;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(44, 62, 80, 0.1);
          }
          li {
            padding: 15px 20px;
            border-bottom: 1px solid #ddd;
            font-size: 18px;
            transition: background-color 0.3s ease;
          }
          li:last-child {
            border-bottom: none;
          }
          li:hover {
            background-color: #e1f5fe;
            cursor: default;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Kanal-Kart</h1>
        <ul>
          <li>Product 1: Phone</li>
          <li>Product 2: Laptop</li>
          <li>Product 3: Shoes</li>
          <li>Product 4: Watches</li>
          <li>Product 5: Bags</li>
        </ul>
      </body>
    </html>
  `);
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
